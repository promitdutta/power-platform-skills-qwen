# Power Platform Skills — Extension Context

This extension provides 28 skills for building Power Platform applications using Qwen Code.

## Quick Start

1. **Install PAC CLI** (required for Code Apps, Model Apps, Power Pages):
   ```bash
   dotnet tool install -g Microsoft.PowerApps.CLI.Tool
   ```

2. **Install .NET 10 SDK** (required for Canvas Apps):
   Download from https://dotnet.microsoft.com/download/dotnet/10.0

3. **Use the skills** — Qwen will auto-discover them via the `/skills` command.

## Available Skills

### Power Pages (11 skills)
Create and deploy Power Pages Code Sites (SPAs) using React, Vue, Angular, or Astro.

| skill | Use When |
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

### Code Apps (13 skills)
Build Power Apps code apps with React + Vite + TypeScript and Power Platform connectors.

| skill | Use When |
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

### Model Apps (1 skill)
Build generative pages (genux) for model-driven Power Apps.

| skill | Use When |
|-------|----------|
| `genpage` | "Build a generative page", "create genux page", "add page to model-driven app" |

### Canvas Apps (3 skills)
Author Canvas Apps via Canvas Authoring MCP server and PA YAML.

| skill | Use When |
|-------|----------|
| `configure-canvas-mcp` | "Configure Canvas Authoring MCP server" |
| `generate-canvas-app` | "Create a Canvas App", "generate canvas app from description" |
| `edit-canvas-app` | "edit my Canvas App", "modify existing canvas app" |

## Key Conventions

- **Connector-First**: All external data access MUST use Power Platform connectors. Direct HTTP calls (`fetch`, `axios`) will fail in production.
- **Memory Bank**: Each project gets a `memory-bank.md` file that tracks progress across sessions.
- **Windows CLI**: The `pac` CLI must be invoked via `pwsh -NoProfile -Command "pac ..."` on Windows.
- **Build Before Deploy**: Always run `npm run build` before `pac code push` or `pac pages upload-code-site`.

## File Structure

```
skills/
├── power-pages/     ← Power Pages skills (11 skills)
├── code-apps/       ← Code Apps skills (13 skills)
├── model-apps/      ← Model Apps skills (1 skill)
└── canvas-apps/     ← Canvas Apps skills (3 skills)
agents/              ← Specialist agent definitions
scripts/             ← Utility scripts (validation, auditing, etc.)
references/          ← Technical reference documents
```
