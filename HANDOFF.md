# HANDOFF — template-site-institucional

Registro de andamento do projeto. Atualizado ao final de cada sessão de trabalho relevante.

---

## Status Atual

Template validado de ponta a ponta: criação, GitHub, deploy no Vercel.
Repositório público marcado como "Template repository" no GitHub e deploy automático
funcionando via Vercel. Fluxo completo testado com projeto fictício de cliente.

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
| 2026-09-01 | Componentes base criados: `Button`, `NavBar`, `HeroSection`, `Section`, `Footer` |
| 2026-09-01 | Utilitário `cn` criado em `src/lib/utils.ts` (clsx + tailwind-merge) |
| 2026-09-01 | `tailwind.config.ts` configurado com paleta de cores de marca (`brand`, `brand-dark`, `brand-light`) |
| 2026-09-01 | `page.tsx` substituída por página de exemplo completa (Início, Sobre, Serviços, Contato) |
| 2026-09-01 | Build de produção executado e aprovado sem erros (`npm run build`) |
| 2026-09-01 | Repositório subido para o GitHub em github.com/LuSan1986/template-site-institucional e marcado como "Template repository" |
| 2026-09-01 | Fluxo de reuso testado com projeto fictício "teste-cliente-fake" (Padaria Dona Célia): criado via "Use this template", personalizado (nome, cores âmbar, textos) com Claude Code e publicado no Vercel com sucesso |
| 2026-09-01 | Validado: conexão Vercel → GitHub, import automático do framework Next.js e deploy automático a cada push na branch main |
| 2026-09-01 | Repositório de teste `teste-cliente-fake` apagado do GitHub e projeto correspondente removido do Vercel |

---

## Próximos Passos

1. Adicionar mais seções ao template (ex: depoimentos, galeria, formulário de contato funcional).
2. Testar o processo de conectar um domínio próprio no Vercel.
3. Definir processo comercial: precificação, uso do `briefing-cliente.md`, entrega ao cliente.
4. Começar levantamento de requisitos do primeiro cliente real usando `docs/briefing-cliente.md`.
5. Conectar formulário de contato a um serviço de e-mail (ex: Resend).
6. Configurar Google Analytics no `layout.tsx`.

---

## Decisões Importantes

| Decisão | Motivo |
|---|---|
| Next.js 14 com App Router | Padrão atual do ecossistema Next.js; melhor suporte a Server Components e performance |
| Tailwind CSS exclusivo (sem CSS Modules) | Simplicidade e consistência; evita mistura de abordagens de estilização |
| Deploy no Vercel | Integração nativa com Next.js, deploy automático por branch, HTTPS grátis |
| Licença MIT | Permite uso comercial, redistribuição e modificação livre, sem restrições para os clientes |
| Projeto em `C:\Projetos\` (fora do OneDrive) | Evitar conflitos de sincronização do OneDrive com `node_modules` e arquivos de build |
| Repositório do template privado; clientes via "Use this template" | Separação clara entre template base e projetos de clientes; cada cliente tem seu próprio repositório |
| Vercel configurado como "Only select repositories" | Segurança: apenas repositórios explicitamente autorizados têm acesso ao Vercel; novos projetos de clientes são adicionados manualmente |
| clsx + tailwind-merge para classes CSS | Evita conflitos de classes Tailwind ao combinar condicionalmente; padrão da comunidade |
| Componentes com props opcionais e valores padrão | Facilita o reuso: copia o componente e só muda o que precisar, sem quebrar nada |

---

## Pendências / Bloqueios

- Nenhuma pendência crítica no momento.

---

*Última atualização: 2026-09-01 (sessão 3)*
