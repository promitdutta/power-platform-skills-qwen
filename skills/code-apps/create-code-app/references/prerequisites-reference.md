# Prerequisites Reference

## Required Tools

| Tool           | Minimum Version | Check Command                    | Install                     |
| -------------- | --------------- | -------------------------------- | --------------------------- |
| Node.js        | **v22+**        | `node --version`                 | https://nodejs.org/         |
| pac CLI        | **latest**        | `pwsh -NoProfile -Command "pac"` | https://aka.ms/PowerAppsCLI |
| Git (optional) | Any               | `git --version`                  | https://git-scm.com/        |

```bash
pwsh -NoProfile -Command "pac code push"
pwsh -NoProfile -Command "pac env list"
```

## Required Account

- Power Platform account with code apps enabled
- At least one environment available

## Required Permissions (allowedPrompts)

When using plan mode, include these in `allowedPrompts`:

```json
{
  "allowedPrompts": [
    { "tool": "run_shell_command", "prompt": "check tool versions (node, git)" },
    { "tool": "run_shell_command", "prompt": "scaffold power apps template (npx degit)" },
    { "tool": "run_shell_command", "prompt": "install npm dependencies" },
    { "tool": "run_shell_command", "prompt": "build for production (npm run build)" },
    { "tool": "run_shell_command", "prompt": "authenticate and manage Power Platform (pwsh -NoProfile -Command 'pac auth/env')" },
    { "tool": "run_shell_command", "prompt": "initialize power apps project (pwsh pac code init)" },
    { "tool": "run_shell_command", "prompt": "list connections (/list-connections skill via Power Platform REST API)" },
    { "tool": "run_shell_command", "prompt": "add data sources (pwsh pac code add-data-source)" },
    { "tool": "run_shell_command", "prompt": "deploy to power platform (pac code push)" }
  ]
}
```
