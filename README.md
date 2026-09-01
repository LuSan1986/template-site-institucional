# template-site-institucional

Template base para criação de sites institucionais para clientes.
Construído com Next.js 14, TypeScript e Tailwind CSS, pronto para deploy no Vercel.

---

## O que é este repositório?

Este é um template reutilizável que serve como ponto de partida para cada novo projeto
de site institucional. Ele já inclui a configuração de stack, a estrutura de pastas,
documentação de processo e convenções de código.

Cada projeto de cliente nasce como uma cópia independente deste repositório.

---

## Como usar para um novo projeto de cliente

1. **Crie um novo repositório no GitHub** com o nome do cliente (ex: `site-acme`).

2. **Clone este template localmente:**
   ```bash
   git clone <url-deste-repositorio> site-acme
   cd site-acme
   ```

3. **Conecte ao novo repositório remoto:**
   ```bash
   git remote set-url origin <url-do-novo-repositorio>
   git push -u origin main
   ```

4. **Configure as variáveis de ambiente:**
   ```bash
   cp .env.example .env.local
   # Edite .env.local com os dados reais do cliente
   ```

5. **Faça o levantamento de requisitos** usando `docs/briefing-cliente.md`.

6. **Desenvolva o site** seguindo as convenções descritas em `CLAUDE.md`.

7. **Faça o deploy** seguindo o passo a passo em `docs/deploy.md`.

---

## Como rodar o projeto localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env.local

# Iniciar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
npm run build   # Gerar build de produção
npm run start   # Rodar build de produção localmente
npm run lint    # Verificar erros de lint
```

---

## Estrutura de Pastas

```
src/
  app/          # Páginas e layouts (Next.js App Router)
  components/   # Componentes reutilizáveis
  styles/       # Estilos globais
public/
  assets/       # Imagens e arquivos estáticos
docs/
  briefing-cliente.md   # Roteiro para levantamento de requisitos
  deploy.md             # Guia de deploy no Vercel
```

---

## Stack

- [Next.js 14](https://nextjs.org) — App Router
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com) — Deploy e hospedagem

---

## Licença

MIT — veja o arquivo [LICENSE](./LICENSE) para detalhes.
