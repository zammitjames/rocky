# Rocky

Your company of AI coworkers.

Build persistent teams of agents with their own roles, memory, tools, computers,
and scheduled work. Rocky is being developed toward a company hierarchy:
engineering managers with engineering teams, finance leads with analysts, and
nested departments that can delegate work and report results.

## Current status

This is an initial independently maintained source snapshot with Rocky product
branding. Persistent bots, agent messaging, file sharing, memory, and scheduled
routines are inherited capabilities. Company hierarchy, department memory, and
manager review workflows are planned; they are not implemented yet.

See [the implementation plan](docs/rocky-plan.md) for the proposed architecture.

## Develop locally

Requirements: Node.js 22.22.2+ within 22.x, Node.js 24.x, or Node.js 26+;
pnpm 12; and Docker.

```sh
git clone https://github.com/zammitjames/rocky.git
cd rocky
cp .env.example .env
pnpm install --frozen-lockfile
```

Configure database passwords and independent authentication, encryption, and
computer-proxy secrets in `.env`. Follow the existing
[local setup instructions](docs/source-readme.md#local-development-source-checkout)
for the exact variables, then run:

```sh
pnpm sandbox:build
pnpm dev
```

The development launcher prints the local address. Connect your own model during
onboarding. Never commit `.env` or provider credentials.

Internal `@rakazo/*` workspace names and existing environment variables remain
compatible with the source snapshot. Existing self-hosting documentation may
reference the original project and its published images; those are not Rocky
releases. Native apps require Rocky-specific signing and release configuration.
The inherited marketing site and artwork have not been redesigned.

## License and attribution

Apache-2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE) for source attribution
and modification notices.
