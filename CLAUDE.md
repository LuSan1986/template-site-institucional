# CLAUDE.md — Guia do Projeto para Claude Code

Este arquivo define as convenções e regras que Claude deve seguir em todos os projetos
derivados deste template.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript (strict mode) |
| Estilização | Tailwind CSS (exclusivo — sem CSS Modules, sem styled-components) |
| Deploy | Vercel |

---

## Estrutura de Pastas

```
src/
  app/          # Páginas e layouts (App Router do Next.js)
  components/   # Componentes reutilizáveis
  styles/       # globals.css e configurações base de estilo
public/
  assets/       # Imagens, ícones e outros arquivos estáticos
docs/           # Documentação do projeto (briefing, deploy, etc.)
```

---

## Convenções de Código

### Componentes
- Nomes em **PascalCase**: `HeroSection.tsx`, `ContactForm.tsx`, `NavBar.tsx`.
- Um componente por arquivo.
- Sempre exportar como `export default`.
- Usar `interface` (não `type`) para definir props.

### Estilização
- **Usar exclusivamente Tailwind CSS** para estilização.
- Nunca criar arquivos `.module.css` nem usar `style={{}}` inline, salvo para valores dinâmicos que Tailwind não suporte.
- Seguir abordagem **mobile-first**: classes base para mobile, breakpoints (`sm:`, `md:`, `lg:`) para telas maiores.
- Classes Tailwind longas devem ser organizadas com `clsx` ou `cn` (utilitário de merge de classes).

### TypeScript
- Sem uso de `any`. Sempre tipar corretamente.
- Props de componentes sempre tipadas com `interface`.
- Evitar `// @ts-ignore` — resolver o tipo corretamente.

### Nomenclatura de Arquivos
- Componentes: `PascalCase.tsx`
- Páginas (App Router): `page.tsx`, `layout.tsx`, `loading.tsx` (convenção do Next.js)
- Utilitários e hooks: `camelCase.ts` (ex: `useScrollPosition.ts`, `formatDate.ts`)

### Importações
- Usar o alias `@/` para importações absolutas (ex: `import Button from "@/components/Button"`).
- Nunca usar caminhos relativos longos (`../../../`).

---

## Comandos Principais

```bash
# Iniciar servidor de desenvolvimento (abre em http://localhost:3000)
npm run dev

# Gerar build de produção
npm run build

# Rodar build de produção localmente
npm run start

# Verificar erros de lint (ESLint)
npm run lint
```

---

## Variáveis de Ambiente

- Copiar `.env.example` para `.env.local` e preencher os valores reais.
- Variáveis expostas ao browser devem ter prefixo `NEXT_PUBLIC_`.
- Nunca commitar `.env.local` (já está no `.gitignore`).

---

## Fluxo de Trabalho com Clientes

1. Copiar este template para um novo repositório com o nome do cliente.
2. Preencher `docs/briefing-cliente.md` durante a reunião de levantamento.
3. Desenvolver localmente com `npm run dev`.
4. Fazer deploy seguindo `docs/deploy.md`.
5. Manter `HANDOFF.md` atualizado com o progresso do projeto.
