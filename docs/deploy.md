# Guia de Deploy no Vercel

Passo a passo para publicar o site de um cliente usando este template.

---

## Pré-requisitos

- Conta criada em [vercel.com](https://vercel.com) (plano gratuito Hobby funciona para a maioria dos projetos)
- Projeto hospedado em um repositório Git (GitHub, GitLab ou Bitbucket)
- Node.js instalado localmente (versão 18 ou superior)

---

## Passo 1 — Preparar o Repositório

1. Crie um repositório novo no GitHub para o projeto do cliente.
2. Clone este template e conecte ao novo repositório:
   ```bash
   git clone <url-deste-template> nome-do-projeto-cliente
   cd nome-do-projeto-cliente
   git remote set-url origin <url-do-novo-repositorio>
   git push -u origin main
   ```

---

## Passo 2 — Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Preencha os valores reais no `.env.local` (nunca suba este arquivo para o Git).
3. Anote as variáveis que precisarão ser configuradas no painel do Vercel.

---

## Passo 3 — Importar o Projeto no Vercel

1. Acesse [vercel.com/new](https://vercel.com/new).
2. Clique em **"Import Git Repository"** e selecione o repositório do cliente.
3. Vercel detecta automaticamente que é um projeto Next.js — não precisa alterar as configurações de build.
4. Na seção **"Environment Variables"**, adicione todas as variáveis do `.env.example` com os valores reais.
5. Clique em **"Deploy"**.

---

## Passo 4 — Configurar Domínio Personalizado

1. No painel do projeto no Vercel, acesse **Settings > Domains**.
2. Clique em **"Add Domain"** e digite o domínio do cliente (ex: `minhaempresa.com.br`).
3. Vercel vai exibir os registros DNS que precisam ser configurados no registrador de domínio do cliente (ex: Registro.br, GoDaddy, Cloudflare).
4. Acesse o painel do registrador, localize as configurações de DNS e adicione os registros indicados pelo Vercel.
5. Aguarde a propagação de DNS (pode levar de alguns minutos até 48 horas).
6. O Vercel emite o certificado SSL automaticamente — o site já vai abrir com HTTPS.

---

## Passo 5 — Verificar o Deploy

- Acesse a URL gerada pelo Vercel (ex: `nome-do-projeto.vercel.app`) e verifique se tudo está funcionando.
- Teste em mobile e desktop.
- Verifique se as variáveis de ambiente estão sendo lidas corretamente.
- Confira o console do navegador em busca de erros.

---

## Deploy Automático (CI/CD)

Após a integração com o repositório Git, o Vercel faz deploy automático:

- **Branch `main`** → ambiente de produção (domínio do cliente).
- **Outras branches** → Vercel gera uma URL de preview para cada push. Ideal para mostrar mudanças ao cliente antes de publicar.

---

## Comandos Úteis Locais

```bash
# Rodar em desenvolvimento
npm run dev

# Gerar build de produção localmente (para testar antes do deploy)
npm run build
npm run start

# Verificar erros de lint
npm run lint
```

---

## Problemas Comuns

| Problema | Solução |
|---|---|
| Build falha no Vercel mas funciona local | Verifique se as variáveis de ambiente foram adicionadas no painel do Vercel |
| Domínio não abre após configurar DNS | Aguarde a propagação (até 48h) e use [dnschecker.org](https://dnschecker.org) para monitorar |
| Erro 404 em rotas internas | Confirme que está usando o App Router corretamente (`src/app/`) |
| Imagens não carregam | Verifique se domínios externos estão configurados em `next.config.js` |

---

*Para suporte oficial: [vercel.com/docs](https://vercel.com/docs)*
