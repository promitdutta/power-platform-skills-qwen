/**
 * Qwen Code Power Platform Skills Installer
 *
 * Installs Microsoft Power Platform skills plugins for Qwen Code.
 * Usage: node install.js
 *
 * This script:
 * 1. Checks prerequisites (Node.js, PAC CLI, .NET SDK)
 * 2. Downloads or updates the skills repository
 * 3. Installs selected plugins by creating symlinks or copying files
 * 4. Enables auto-update for future sessions
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const REPO_URL = 'https://github.com/microsoft/power-platform-skills.git';
const REPO_DIR = path.join(os.homedir(), '.qwen', 'power-platform-skills');
const PLUGIN_DIR = path.join(os.homedir(), '.qwen', 'plugins');
const MARKETPLACE = path.join(os.homedir(), '.qwen', 'marketplace.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(cmd, opts = {}) {
  try {
    return execSync(cmd, { stdio: 'inherit', ...opts }).toString();
  } catch (e) {
    return null;
  }
}

function log(msg) {
  console.log(`\n  ${msg}`);
}

function checkPacCli() {
  log('Checking PAC CLI...');
  const output = run('pwsh -NoProfile -Command "pac help"', { stdio: 'pipe' });
  if (!output) {
    log('⚠️  PAC CLI not found.');
    return false;
  }
  const match = output.match(/(\d+\.\d+\.\d+)/);
  if (match) {
    const [major] = match[1].split('.').map(Number);
    if (major >= 2) {
      log(`✅ PAC CLI ${match[1]} found`);
      return true;
    }
  }
  log('⚠️  PAC CLI version is outdated. Update with: dotnet tool update -g Microsoft.PowerApps.CLI.Tool');
  return false;
}

function checkDotNet() {
  log('Checking .NET SDK...');
  const output = run('dotnet --list-sdks', { stdio: 'pipe' });
  if (!output) {
    log('⚠️  .NET SDK not found (required for Canvas Apps plugin)');
    return false;
  }
  log('✅ .NET SDK found');
  return true;
}

async function cloneOrUpdate() {
  log('📦 Downloading Power Platform Skills...');
  if (fs.existsSync(REPO_DIR)) {
    log('Updating existing repository...');
    try {
      execSync('git pull', { cwd: REPO_DIR, stdio: 'pipe' });
      log('✅ Repository updated');
    } catch {
      log('⚠️  Update failed. Re-cloning...');
      fs.rmSync(REPO_DIR, { recursive: true, force: true });
      cloneFresh();
    }
  } else {
    cloneFresh();
  }
}

function cloneFresh() {
  log('Cloning repository...');
  run(`git clone --depth 1 ${REPO_URL} "${REPO_DIR}"`);
  log('✅ Repository cloned');
}

async function installPlugin(pluginName) {
  const source = path.join(REPO_DIR, 'plugins', pluginName);
  const dest = path.join(PLUGIN_DIR, pluginName);

  if (!fs.existsSync(source)) {
    log(`⚠️  Plugin "${pluginName}" not found in repository`);
    return false;
  }

  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }

  // Try symlink first, fall back to copy
  try {
    if (process.platform === 'win32') {
      run(`mklink /J "${dest}" "${source}"`, { shell: 'cmd.exe' });
    } else {
      fs.symlinkSync(source, dest, 'dir');
    }
    log(`✅ ${pluginName} installed (symlink)`);
  } catch {
    // Fallback: copy
    copyRecursive(source, dest);
    log(`✅ ${pluginName} installed (copy)`);
  }

  return true;
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const items = fs.readdirSync(src);
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function readMarketplace() {
  const mpPath = path.join(REPO_DIR, '.qwen-plugin', 'marketplace.json');
  if (!fs.existsSync(mpPath)) {
    // Try code-apps shared location
    const alt = path.join(REPO_DIR, 'plugins', 'code-apps', '.qwen-plugin', 'marketplace.json');
    if (fs.existsSync(alt)) return JSON.parse(fs.readFileSync(alt, 'utf-8'));
    return null;
  }
  return JSON.parse(fs.readFileSync(mpPath, 'utf-8'));
}

async function main() {
  log('╔══════════════════════════════════════════════╗');
  log('║  Microsoft Power Platform Skills Installer  ║');
  log('║  for Qwen Code                               ║');
  log('╚══════════════════════════════════════════════╝');

  // Check prerequisites
  const hasPac = checkPacCli();
  const hasDotNet = checkDotNet();

  // Clone/update repo
  await cloneOrUpdate();

  // read_file marketplace
  const marketplace = readMarketplace();
  if (!marketplace || !marketplace.plugins) {
    log('⚠️  Could not read marketplace configuration');
    rl.close();
    return;
  }

  log('\n📋 Available plugins:');
  marketplace.plugins.forEach((p, i) => {
    log(`  ${i + 1}. ${p.name} — ${p.description}`);
  });

  log('\nWhich plugins would you like to install?');
  log('  Enter numbers separated by commas (e.g., 1,2,3) or "all" for everything');
  log('  Press Enter to install all plugins');

  rl.question('\nYour choice: ', async (answer) => {
    const plugins = marketplace.plugins;
    let toInstall = [];

    if (!answer || answer.toLowerCase() === 'all') {
      toInstall = plugins.map(p => p.name);
    } else {
      const indices = answer.split(',').map(s => parseInt(s.trim()) - 1).filter(n => !isNaN(n));
      toInstall = indices.map(i => plugins[i]?.name).filter(Boolean);
    }

    if (!fs.existsSync(PLUGIN_DIR)) {
      fs.mkdirSync(PLUGIN_DIR, { recursive: true });
    }

    for (const plugin of toInstall) {
      await installPlugin(plugin);
    }

    log('\n✅ Installation complete!');
    log('\nTo use these skills in Qwen Code, reference the plugins directory:');
    log(`  Plugins installed to: ${PLUGIN_DIR}`);
    log('\nExample usage in Qwen Code:');
    log('  "Use the Power Platform skills at ' + PLUGIN_DIR + '"');

    rl.close();
  });
}

main().catch(err => {
  console.error('\n❌ Installation failed:', err.message);
  process.exit(1);
});
