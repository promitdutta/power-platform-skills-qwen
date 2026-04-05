# Power Platform Skills — Extension Context

> ⚠️ **Unofficial community adaptation.** Not an official Microsoft product. Adapted from [microsoft/power-platform-skills](https://github.com/microsoft/power-platform-skills) for Qwen Code by [promitdutta](https://github.com/promitdutta).

This extension provides **28 skills** and **9 specialist agents** for building Power Platform applications using Qwen Code.

## Prerequisites

### Required for All Skills
- **Node.js 22+** — `winget install OpenJS.NodeJS.LTS`
- **PAC CLI >= 2.3.1** — `dotnet tool install -g Microsoft.PowerApps.CLI.Tool`
- **Git** — `winget install Git.Git`

### Additional for Canvas Apps
- **.NET 10 SDK** — https://dotnet.microsoft.com/download/dotnet/10.0

### Additional for Power Pages
- **Azure CLI** — `winget install Microsoft.AzureCLI`

### Authentication
Before using deployment skills:
```powershell
pwsh -NoProfile -Command "pac auth create"
pwsh -NoProfile -Command "pac auth list"
```

## Available Skills

### Power Pages (11 Skills)
| Skill | Use When |
|-------|----------|
| `create-site` | "Create a Power Pages site", "build a code site", "scaffold a website" |
| `deploy-site` | "Deploy my Power Pages site", "upload site to Power Pages" |
| `activate-site` | "Activate my site for public access", "provision website record" |
| `setup-datamodel` | "Create Dataverse tables", "set up data model", "create database schema" |
| `add-sample-data` | "Populate tables with sample data", "add test records" |
| `integrate-webapi` | "Connect site to Dataverse Web API", "add API integration" |
| `setup-auth` | "Add authentication", "set up Entra ID login", "add role-based access" |
| `create-webroles` | "Create web roles", "set up web role permissions" |
| `add-seo` | "Add SEO metadata", "create sitemap", "add robots.txt" |
| `test-site` | "Test my deployed site", "verify site pages work" |
| `audit-permissions` | "Audit site security", "check table permissions" |

### Code Apps (13 Skills)
| Skill | Use When |
|-------|----------|
| `create-code-app` | "Create a new code app", "scaffold a Power Apps code app" |
| `deploy` | "Deploy my code app", "push to Power Platform" |
| `list-connections` | "List Power Platform connections", "find connection IDs" |
| `add-datasource` | "Add a data source", "connect to data" (router) |
| `add-dataverse` | "Add Dataverse table", "connect to Dataverse" |
| `add-sharepoint` | "Add SharePoint connector" |
| `add-azuredevops` | "Add Azure DevOps connector" |
| `add-teams` | "Add Microsoft Teams connector" |
| `add-excel` | "Add Excel Online connector" |
| `add-onedrive` | "Add OneDrive for Business connector" |
| `add-office365` | "Add Office 365 Outlook connector" |
| `add-mcscopilot` | "Add Copilot Studio agent connector" |
| `add-connector` | "Add any other Power Platform connector" |

### Model Apps (1 Skill)
| Skill | Use When |
|-------|----------|
| `genpage` | "Build a generative page", "create genux page", "page in model-driven app" |

### Canvas Apps (3 Skills)
| Skill | Use When |
|-------|----------|
| `configure-canvas-mcp` | "Configure Canvas Authoring MCP server" |
| `generate-canvas-app` | "Create a Canvas App", "generate Canvas App from description" |
| `edit-canvas-app` | "Edit my Canvas App", "modify existing Canvas App" |

## Key Conventions

### Connector-First
All external data access MUST use Power Platform connectors. Direct HTTP calls (`fetch`, `axios`, Graph API) will fail at runtime in the Power Platform sandbox.

### Windows CLI
The `pac` CLI must be invoked via PowerShell:
```powershell
pwsh -NoProfile -Command "pac code push"
pwsh -NoProfile -Command "pac pages upload-code-site"
```

### Build Before Deploy
Always run `npm run build` before `pac code push` or `pac pages upload-code-site`. Never skip the build step.

### Memory Bank
Each project gets a `memory-bank.md` file that tracks progress across sessions. Skills read this at start and update after major steps.

## Extension Structure

```
skills/
├── power-pages/     ← 11 skills for Power Pages
├── code-apps/       ← 13 skills for Code Apps
├── model-apps/      ← 1 skill for Model-Driven
└── canvas-apps/     ← 3 skills for Canvas Apps
agents/              ← 9 specialist agents
scripts/             ← Utility scripts and tests
references/          ← Technical reference documents
```
