# URL Shortener

A URL shortener API built with [Fastify](https://fastify.dev/) and TypeScript.

## Tech stack

- [Fastify](https://fastify.dev/) — web framework
- [TypeScript](https://www.typescriptlang.org/) — types and compilation
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — linting and formatting
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) — Git hooks
- [Bun](https://bun.sh/) — package manager

## Getting started

### Prerequisites

- Node.js 20+
- Bun

### Installation

```bash
bun install
```

### Environment variables

Copy `.env.example` to `.env` and adjust the values:

```bash
cp .env.example .env
```

```env
APP_PORT=3000
APP_HOST=0.0.0.0
```

Environment variables are defined in `src/config/env.ts` and loaded from `.env` via `dotenv` in `src/server.ts`.

### Development

```bash
bun run dev
```

The server runs on the `APP_HOST` and `APP_PORT` values from your `.env` file.

### Build and run

```bash
bun run build
bun run start
```

## Scripts

| Script                 | Description                                 |
| ---------------------- | ------------------------------------------- |
| `bun run dev`          | Start the dev server with hot reload        |
| `bun run build`        | Compile TypeScript and rewrite path aliases |
| `bun run start`        | Run the compiled server from `dist/`        |
| `bun run lint`         | Check the code with ESLint                  |
| `bun run lint:fix`     | Fix ESLint issues automatically             |
| `bun run format`       | Format the whole project with Prettier      |
| `bun run format:check` | Check formatting without writing changes    |

## Project structure

```text
src/
├── config/
│   └── env.ts          # Environment variable configuration
├── modules/
│   └── users/
│       └── users.route.ts
├── app.ts              # Fastify app setup and route registration
└── server.ts           # Server entry point
```

Imports use the `@/` alias, which maps to `src/`. Relative imports are rejected by ESLint.

```ts
import { env } from "@/config/env.js";
```

## Commit rules

Every commit message must follow this format:

```text
<prefix>: <commit message>
```

Only the following prefixes are allowed:

| Prefix  | Use it for                                           |
| ------- | ---------------------------------------------------- |
| `init`  | Initial setup or first implementation of something   |
| `feat`  | A new feature                                        |
| `fix`   | A bug fix                                            |
| `chore` | Maintenance, tooling, dependencies, or configuration |

### Valid examples

```text
init: project setup
feat: add url shortener endpoint
fix: rebase issue
chore: update dependencies
```

### Invalid examples

```text
added url shortener endpoint
update: change dependencies
Fix: rebase issue
fix - rebase issue
```

The message must start with a lowercase prefix, followed by a colon and a space, and then a
non-empty message.

A `commit-msg` Git hook validates the message and blocks the commit if it does not match.

## Git hooks

| Hook         | What it does                                                           |
| ------------ | ---------------------------------------------------------------------- |
| `pre-commit` | Formats the project with Prettier, runs lint-staged, and checks ESLint |
| `commit-msg` | Validates the commit message prefix and format                         |
| `pre-push`   | Runs the production build (`tsc && tsc-alias`)                         |

If formatting or linting changes files, re-stage them and commit again.
