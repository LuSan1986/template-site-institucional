# HANDOFF — template-site-institucional

Registro de andamento do projeto. Atualizado ao final de cada sessão de trabalho relevante.

---

## Status Atual

Template base criado e configurado. Pronto para ser copiado e usado como ponto de partida
para o primeiro projeto de cliente.

---

## O que já foi feito

| Data | Entrega / Decisão |
|---|---|
| 2026-09-01 | Projeto Next.js 14 inicializado com TypeScript, Tailwind CSS e ESLint via `create-next-app` |
| 2026-09-01 | Estrutura de pastas criada: `src/components`, `src/styles`, `public/assets`, `docs/` |
| 2026-09-01 | `docs/briefing-cliente.md` criado com roteiro completo de levantamento de requisitos |
| 2026-09-01 | `docs/deploy.md` criado com passo a passo de deploy no Vercel |
| 2026-09-01 | `CLAUDE.md` criado com stack, convenções de código e comandos principais |
| 2026-09-01 | `.gitignore` gerado automaticamente pelo `create-next-app` (adequado para Next.js/Node) |
| 2026-09-01 | `.env.example` criado com variáveis comuns (URL, analytics, e-mail, reCAPTCHA) |
| 2026-09-01 | `README.md` criado explicando o template e como usá-lo para novos projetos de clientes |
| 2026-09-01 | `LICENSE` criado com licença MIT |
| 2026-09-01 | Repositório Git local inicializado com primeiro commit organizado |

---

## Próximos Passos

1. Criar repositório remoto no GitHub e fazer push do template.
2. Desenvolver componentes base reutilizáveis (NavBar, Footer, HeroSection, Section, Button).
3. Criar página inicial de exemplo (`src/app/page.tsx`) usando os componentes base.
4. Adicionar utilitário `cn` (merge de classes Tailwind) em `src/lib/utils.ts`.
5. Configurar fonte padrão e cores base no `tailwind.config.ts`.
6. Começar levantamento de requisitos do primeiro cliente real usando `docs/briefing-cliente.md`.

---

## Decisões Importantes

| Decisão | Motivo |
|---|---|
| Next.js 14 com App Router | Padrão atual do ecossistema Next.js; melhor suporte a Server Components e performance |
| Tailwind CSS exclusivo (sem CSS Modules) | Simplicidade e consistência; evita mistura de abordagens de estilização |
| Deploy no Vercel | Integração nativa com Next.js, deploy automático por branch, HTTPS grátis |
| Licença MIT | Permite uso comercial, redistribuição e modificação livre, sem restrições para os clientes |
| Projeto em `C:\Projetos\` (fora do OneDrive) | Evitar conflitos de sincronização do OneDrive com `node_modules` e arquivos de build |

---

## Pendências / Bloqueios

- Nenhuma pendência no momento.

---

*Última atualização: 2026-09-01*
