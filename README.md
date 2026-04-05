# Power Platform Skills for Qwen Code

> **⚠️ Unofficial Community Extension**
> 
> This is an **unofficial, community-maintained** adaptation of the official [Microsoft Power Platform Skills](https://github.com/microsoft/power-platform-skills) repository, originally built for Claude Code and GitHub Copilot.
> 
> This extension has been adapted to work with **Qwen Code CLI**. It is **not** an official Microsoft product, **not** maintained by Microsoft, and **not** endorsed by Microsoft. It is created and maintained independently by [promitdutta](https://github.com/promitdutta).
> 
> The original skills are owned by Microsoft and licensed under MIT. This adaptation preserves the original skill content while updating tool names, variable references, and extension format for Qwen Code compatibility.

## Overview

This repository is a **Qwen Code extension** containing skills, agents, and commands for Power Platform services. Each skill provides step-by-step workflows to help developers build, test, and deploy Power Platform solutions using modern web technologies and CLI tooling.

## Prerequisites

Before using any skills, ensure you have the required tools installed:

### Required for All Skills

| Tool | Minimum Version | Purpose | Install Command |
|------|----------------|---------|----------------|
| Node.js | 22+ | JavaScript runtime | `winget install OpenJS.NodeJS.LTS` |
| PAC CLI | 2.3.1+ | Power Apps CLI for deployment | `dotnet tool install -g Microsoft.PowerApps.CLI.Tool` |
| Git | Any | Version control for project files | `winget install Git.Git` |

### Additional for Canvas Apps

| Tool | Minimum Version | Purpose | Install Command |
|------|----------------|---------|----------------|
| .NET 10 SDK | 10.0+ | Canvas Authoring MCP server runtime | [Download from Microsoft](https://dotnet.microsoft.com/download/dotnet/10.0) |

### Additional for Power Pages

| Tool | Minimum Version | Purpose | Install Command |
|------|----------------|---------|----------------|
| Azure CLI | Latest | Power Platform management | `winget install Microsoft.AzureCLI` |

### Verify Prerequisites

After installation, verify everything is ready:

```powershell
# Verify Node.js (must be 22+)
node --version

# Verify PAC CLI (must be >= 2.3.1)
pwsh -NoProfile -Command "pac help"

# Verify Git
git --version

# Verify .NET SDK (for Canvas Apps)
dotnet --list-sdks
```

### Authenticate with Power Platform

Before using deployment skills, authenticate with your Power Platform environment:

```powershell
# Create authentication profile
pwsh -NoProfile -Command "pac auth create"

# This will open a browser for Microsoft Entra ID sign-in.
# Complete the sign-in flow, then verify:
pwsh -NoProfile -Command "pac auth list"

# You should see your environment listed with a * marker indicating it's active.
```

### Select Your Environment

If you have multiple Power Platform environments, select the one you want to work with:

```powershell
# List available environments
pwsh -NoProfile -Command "pac env list"

# Select your target environment
pwsh -NoProfile -Command "pac env select --environment <environment-id>"
```

## Installation

### Quick Install (Recommended)

Clone the repository directly into your Qwen Code extensions directory:

**Windows (PowerShell)**:

```powershell
git clone https://github.com/promitdutta/power-platform-skills-qwen.git "$env:USERPROFILE\.qwen\extensions\power-platform-skills"
```

**macOS / Linux**:

```bash
git clone https://github.com/promitdutta/power-platform-skills-qwen.git ~/.qwen/extensions/power-platform-skills
```

After cloning, **restart Qwen Code**. The extension will be automatically discovered and loaded.

### Verify Installation

After restarting Qwen Code, verify the skills are available:

```
/skills
```

You should see all 28 Power Platform skills listed under the `power-platform-skills` extension.

### Manual Installation (Alternative)

If you prefer to install manually without cloning, copy the repository contents to your extensions directory:

1. Download or copy the repository contents
2. Place them in `%USERPROFILE%\.qwen\extensions\power-platform-skills\` (Windows) or `~/.qwen/extensions/power-platform-skills/` (macOS/Linux)
3. Ensure the directory contains `qwen-extension.json` at the root
4. Restart Qwen Code

## Available Skills

### Power Pages (11 Skills)

Create and deploy Power Pages Code Sites (SPAs) using React, Vue, Angular, or Astro.

**Prerequisites**: Node.js 22+, PAC CLI 2.3.1+, Azure CLI

| Skill | Description | Use When |
|-------|-------------|----------|
| `create-site` | Scaffold a complete Power Pages code site from React, Vue, Angular, or Astro templates | "Create a Power Pages site", "build a code site", "scaffold a website" |
| `deploy-site` | Build and deploy a Power Pages code site to Power Pages via PAC CLI | "Deploy my Power Pages site", "upload site to Power Pages" |
| `activate-site` | Provision a website record for public URL access | "Activate my site for public access", "provision website record" |
| `setup-datamodel` | Create Dataverse tables, columns, and relationships via OData API | "Create Dataverse tables", "set up data model", "create database schema" |
| `add-sample-data` | Populate Dataverse tables with realistic sample records | "Populate tables with sample data", "add test records" |
| `integrate-webapi` | Connect Power Pages code site to Dataverse Web API with typed client and CRUD services | "Connect site to Dataverse Web API", "add API integration" |
| `setup-auth` | Add Microsoft Entra ID authentication and role-based authorization | "Add authentication", "set up Entra ID login", "add role-based access" |
| `create-webroles` | Generate web role YAML files with UUID generation | "Create web roles", "set up web role permissions" |
| `add-seo` | Add robots.txt, sitemap.xml, meta tags (Open Graph, Twitter Cards) | "Add SEO metadata", "create sitemap", "add robots.txt" |
| `test-site` | Browser-based runtime testing with Playwright | "Test my deployed site", "verify site pages work" |
| `audit-permissions` | Systematic security audit of table permissions with HTML report | "Audit site security", "check table permissions" |

**Framework Support**: React (Vite), Vue (Vite), Angular (CLI), Astro

### Code Apps (13 Skills)

Build Power Apps code apps with React + Vite + TypeScript and Power Platform connectors.

**Prerequisites**: Node.js 22+, PAC CLI 2.3.1+

| Skill | Description | Use When |
|-------|-------------|----------|
| `create-code-app` | Scaffold, configure, and deploy a new Power Apps code app | "Create a new code app", "scaffold a Power Apps code app" |
| `deploy` | Build and deploy an existing code app | "Deploy my code app", "push to Power Platform" |
| `list-connections` | List Power Platform connections to find connection IDs | "List Power Platform connections", "find connection IDs" |
| `add-datasource` | Add a data source (routes to the appropriate add-* skill) | "Add a data source", "connect to data" |
| `add-dataverse` | Add Dataverse tables with generated TypeScript models and services | "Add Dataverse table", "connect to Dataverse" |
| `add-sharepoint` | Add SharePoint Online connector | "Add SharePoint connector" |
| `add-azuredevops` | Add Azure DevOps connector | "Add Azure DevOps connector" |
| `add-teams` | Add Microsoft Teams connector | "Add Microsoft Teams connector" |
| `add-excel` | Add Excel Online (Business) connector | "Add Excel Online connector" |
| `add-onedrive` | Add OneDrive for Business connector | "Add OneDrive for Business connector" |
| `add-office365` | Add Office 365 Outlook connector | "Add Office 365 Outlook connector" |
| `add-mcscopilot` | Add Copilot Studio agent connector | "Add Copilot Studio agent connector" |
| `add-connector` | Add any other Power Platform connector | "Add any other connector" |

**Stack**: React + Vite + TypeScript, deployed via PAC CLI

### Model Apps (1 Skill)

Build and deploy generative pages (genux) for model-driven Power Apps.

**Prerequisites**: Node.js LTS, PAC CLI 2.3.1+

| Skill | Description | Use When |
|-------|-------------|----------|
| `genpage` | Create, update, and deploy generative pages for model-driven apps using React 17, TypeScript, and Fluent UI V9 | "Build a generative page", "create genux page", "page in model-driven app" |

**Stack**: React 17 + TypeScript + Fluent UI V9, deployed via PAC CLI

### Canvas Apps (3 Skills)

Author Power Apps Canvas Apps using the Canvas Authoring MCP server and PA YAML (`.pa.yaml`).

**Prerequisites**: .NET 10 SDK

| Skill | Description | Use When |
|-------|-------------|----------|
| `configure-canvas-mcp` | Configure the Canvas Authoring MCP server for use with Canvas Apps skills | "Configure MCP for Canvas Apps", "set up Canvas Authoring MCP" |
| `generate-canvas-app` | Generate a complete Canvas App from a natural language description | "Create a Canvas App", "generate Canvas App from description" |
| `edit-canvas-app` | Edit an existing Canvas App from a natural language description of changes | "Edit my Canvas App", "modify existing Canvas App" |

**Stack**: PA YAML (`.pa.yaml`) authored via `CanvasAuthoringMcpServer`

## Running Without Interruption

Skills may invoke multiple tools (file edits, shell commands, MCP servers) during a session, which can result in frequent approval prompts. Use the options below to reduce or eliminate these interruptions.

> **Warning**: Auto-approval options give the agent the same access you have on your machine. Only use these in trusted or sandboxed environments.

### Qwen Code

#### Option 1 — Yolo Mode (No Prompts)

Set approval mode to `yolo` in your settings to skip all approval prompts:

```jsonc
// ~/.qwen/settings.json
{
  "tools": {
    "approvalMode": "yolo"
  }
}
```

#### Option 2 — Allow Specific Commands (Recommended)

Pre-approve only the commands your workflow needs:

```jsonc
// ~/.qwen/settings.json
{
  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(git *)",
      "Bash(pwsh -NoProfile -Command pac *)",
      "Bash(dotnet *)",
      "Bash(node *)"
    ]
  }
}
```

#### Option 3 — Plan Mode

Use `plan` approval mode to review changes before they're applied:

```jsonc
// ~/.qwen/settings.json
{
  "general": {
    "approvalMode": "plan"
  }
}
```

See the [Qwen Code settings docs](https://qwenlm.github.io/qwen-code-docs/en/users/configuration/settings/) for the full reference.

## Local Development

To develop and test the extension locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/promitdutta/power-platform-skills-qwen.git
    cd power-platform-skills-qwen
    ```

2. The extension structure:

    ```text
    power-platform-skills-qwen/
    ├── qwen-extension.json          # Extension manifest
    ├── QWEN.md                      # Extension context (loaded on startup)
    ├── README.md                    # This file
    ├── LICENSE                      # MIT License
    ├── skills/                      # Skill definitions
    │   ├── power-pages/             # 11 skills for Power Pages development
    │   ├── code-apps/               # 13 skills for Code Apps development
    │   ├── model-apps/              # 1 skill for Model-Driven generative pages
    │   └── canvas-apps/             # 3 skills for Canvas Apps development
    ├── agents/                      # Specialist agent definitions
    │   ├── power-pages/             # 4 agents for data modeling, permissions, Web API
    │   ├── canvas-apps/             # 4 agents for planning, building, editing
    │   └── code-apps/               # 1 agent for architecture decisions
    ├── scripts/                     # Utility scripts and validation tests
    └── references/                  # Technical reference documents
    ```

3. To test locally, copy to your extensions directory:

    ```bash
    # Windows
    xcopy /E /I . "%USERPROFILE%\.qwen\extensions\power-platform-skills\"

    # macOS/Linux
    cp -r . ~/.qwen/extensions/power-platform-skills/
    ```

4. Restart Qwen Code to load the updated extension.

## Troubleshooting

### Extension Not Discovered

- Verify the directory name matches the extension name in `qwen-extension.json` (`"name": "power-platform-skills"`)
- Check that `qwen-extension.json` is at the root of the extension directory
- Restart Qwen Code after installation or updates

### PAC CLI Not Found

```powershell
# Install PAC CLI
dotnet tool install -g Microsoft.PowerApps.CLI.Tool

# Verify installation
pwsh -NoProfile -Command "pac help"
```

### Authentication Issues

```powershell
# Clear existing auth
pwsh -NoProfile -Command "pac auth clear"

# Re-authenticate
pwsh -NoProfile -Command "pac auth create"

# Verify active environment
pwsh -NoProfile -Command "pac auth list"
```

### Build Failures

- **TS6133 (unused import)**: Remove unused imports and retry
- **Module not found**: Run `npm install` in the project root and retry
- **Node.js version**: Ensure Node.js 22+ (`node --version`)
- **TypeScript errors**: Check the specific error in the build output

### Canvas Apps MCP Server Not Starting

- Verify .NET 10 SDK is installed: `dotnet --list-sdks`
- Check that the Canvas Authoring MCP server is configured correctly
- Ensure the coauthoring session is active in Power Apps Designer

## Documentation

### Microsoft Learn

- [Power Pages Code Sites](https://learn.microsoft.com/en-us/power-pages/configure/create-code-sites)
- [Power Pages REST API](https://learn.microsoft.com/en-us/rest/api/power-platform/powerpages/websites)
- [Generative Pages with External Tools](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/generative-page-external-tools)
- [Power Apps Code Apps](https://learn.microsoft.com/power-apps/developer/code-apps/)
- [Canvas Apps Overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/)
- [PAC CLI Reference](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference)

### Qwen Code

- [Qwen Code Extensions](https://qwenlm.github.io/qwen-code-docs/en/users/extension/introduction/)
- [Qwen Code Skills](https://qwenlm.github.io/qwen-code-docs/en/users/features/skills/)
- [Qwen Code SubAgents](https://qwenlm.github.io/qwen-code-docs/en/users/features/subagents/)
- [Qwen Code Configuration](https://qwenlm.github.io/qwen-code-docs/en/users/configuration/settings/)

## Contributing

This project welcomes contributions and suggestions. When contributing:

1. Follow the existing skill structure (one skill per directory under `skills/`)
2. Include a `SKILL.md` file with YAML frontmatter (`name` and `description` required)
3. Test skills against real Power Platform environments
4. Update this README if adding new skills or changing prerequisites

## License

The original skill content in this repository is licensed under the [MIT](LICENSE) license from Microsoft.

This adaptation (extension structure, Qwen-specific configuration, and documentation updates) is provided as-is by the community maintainer.

## Disclaimer

This is an **unofficial community project**. It is not affiliated with, endorsed by, or sponsored by Microsoft Corporation. Microsoft Power Platform, Power Apps, Power Pages, Canvas Apps, and related trademarks are property of Microsoft Corporation. Use of these trademarks is for identification purposes only and follows Microsoft's [Trademark & Brand Guidelines](https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general).

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow [Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-party's policies.
