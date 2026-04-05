# Power Platform Skills

Official Qwen Code extension for Microsoft Power Platform development.

## Overview

This extension provides **28 skills** and **9 specialist agents** for building Power Platform applications. Skills are auto-discovered and available via the `/skills` command in Qwen Code.

## Installation

### From GitHub (Recommended)

```bash
# Clone into your Qwen extensions directory
git clone https://github.com/microsoft/power-platform-skills.git %USERPROFILE%\.qwen\extensions\power-platform-skills
```

Or on macOS/Linux:

```bash
git clone https://github.com/microsoft/power-platform-skills.git ~/.qwen/extensions/power-platform-skills
```

### Prerequisites

| skill Family | Required Tools | Install Command |
|-------------|---------------|-----------------|
| Code Apps | Node.js 22+, PAC CLI >= 2.3.1 | `winget install OpenJS.NodeJS.LTS`<br>`dotnet tool install -g Microsoft.PowerApps.CLI.Tool` |
| Model Apps | Node.js LTS, PAC CLI >= 2.3.1 | Same as above |
| Power Pages | Node.js LTS, PAC CLI >= 2.3.1 | Same as above |
| Canvas Apps | .NET 10 SDK | [Download from Microsoft](https://dotnet.microsoft.com/download/dotnet/10.0) |

## Available Skills

### Power Pages (11 skills)

Create and deploy Power Pages Code Sites (SPAs) using React, Vue, Angular, or Astro.

| skill | Trigger Keywords |
|-------|-----------------|
| `/skills create-site` | "create a power pages site", "build a code site", "scaffold a website" |
| `/skills deploy-site` | "deploy to power pages", "upload site", "publish site" |
| `/skills activate-site` | "activate my site", "provision website", "make site public" |
| `/skills setup-datamodel` | "create Dataverse tables", "set up data model", "create database" |
| `/skills add-sample-data` | "add sample data", "populate tables", "seed database" |
| `/skills integrate-webapi` | "integrate web api", "connect to dataverse", "add api integration" |
| `/skills setup-auth` | "set up authentication", "add login", "configure Entra ID" |
| `/skills create-webroles` | "create web roles", "set up web role permissions" |
| `/skills add-seo` | "add seo", "create sitemap", "add robots.txt" |
| `/skills test-site` | "test my site", "verify site pages", "browser test" |
| `/skills audit-permissions` | "audit permissions", "check security", "security audit" |

### Code Apps (13 skills)

Build Power Apps code apps with React + Vite + TypeScript and Power Platform connectors.

| skill | Trigger Keywords |
|-------|-----------------|
| `/skills create-code-app` | "create code app", "scaffold power apps code app" |
| `/skills deploy` | "deploy code app", "push to power platform" |
| `/skills list-connections` | "list connections", "find connection ids" |
| `/skills add-datasource` | "add data source", "connect to data" |
| `/skills add-dataverse` | "add dataverse", "connect to dataverse table" |
| `/skills add-sharepoint` | "add sharepoint", "connect to sharepoint" |
| `/skills add-azuredevops` | "add azure devops", "connect to ado" |
| `/skills add-teams` | "add teams", "connect to microsoft teams" |
| `/skills add-excel` | "add excel", "connect to excel online" |
| `/skills add-onedrive` | "add onedrive", "connect to onedrive" |
| `/skills add-office365` | "add office 365", "connect to outlook" |
| `/skills add-mcscopilot` | "add copilot studio", "connect to copilot" |
| `/skills add-connector` | "add connector", "connect to any power platform connector" |

### Model Apps (1 skill)

Build generative pages (genux) for model-driven Power Apps.

| skill | Trigger Keywords |
|-------|-----------------|
| `/skills genpage` | "generative page", "genux", "build genux", "model-driven page" |

### Canvas Apps (3 skills)

Author Canvas Apps via Canvas Authoring MCP server and PA YAML.

| skill | Trigger Keywords |
|-------|-----------------|
| `/skills configure-canvas-mcp` | "configure mcp", "set up canvas authoring mcp" |
| `/skills generate-canvas-app` | "create canvas app", "generate canvas app" |
| `/skills edit-canvas-app` | "edit canvas app", "modify existing canvas app" |

## Extension Structure

```
power-platform-skills/
├── qwen-extension.json      # Extension manifest
├── QWEN.md                  # Extension context
├── README.md                # This file
├── skills/                  # 28 skill definitions
│   ├── power-pages/         # 11 skills
│   ├── code-apps/           # 13 skills
│   ├── model-apps/          # 1 skill
│   └── canvas-apps/         # 3 skills
├── agents/                  # 9 specialist agent definitions
│   ├── power-pages/         # 4 agents
│   ├── canvas-apps/         # 4 agents
│   └── code-apps/           # 1 agent
├── scripts/                 # Utility scripts and tests
└── references/              # Technical reference documents
```

## Key Conventions

### Connector-First Principle
Power Apps code apps run in a sandbox — direct HTTP calls (`fetch`, `axios`, Graph API) do not work at runtime. **All external data access must go through Power Platform connectors.**

### Windows CLI Compatibility
The `pac` CLI is a Windows executable not on the bash PATH. Always invoke via PowerShell:
```powershell
pwsh -NoProfile -Command "pac code push"
```

### Build Before Deploy
Always run `npm run build` before `pac code push` or `pac pages upload-code-site`. Never skip the build step.

### Memory Bank
Each project gets a `memory-bank.md` file that tracks progress across sessions. Skills read this at start and update after major steps.

## Documentation

- [Power Pages Code Sites](https://learn.microsoft.com/en-us/power-pages/configure/create-code-sites)
- [Power Pages REST API](https://learn.microsoft.com/en-us/rest/api/power-platform/powerpages/websites)
- [Generative Pages with External Tools](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/generative-page-external-tools)
- [Power Apps Code Apps](https://learn.microsoft.com/power-apps/developer/code-apps/)
- [PAC CLI Reference](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference)

## License

The code in this repo is licensed under the [MIT](LICENSE) license.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow [Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general).
