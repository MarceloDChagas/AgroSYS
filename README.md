# Sistema de Gestão Agropecuária

Sistema completo para gestão de propriedades rurais, desenvolvido com tecnologias modernas em uma arquitetura monorepo.
# 🚠 Guia para Colaboradores no Windows – Sistema de Gestão Agropecuária

## Pre requisitos
1. Git
2. Node.js e Npm
3. Docker

> Guia completo para configurar o ambiente local com Git, SSH e clonar o repositório usando Windows

## 🔒 1. Gerar chave SSH exclusiva para este projeto

1. Abra o **Git Bash** (Menu Iniciar > digite "Git Bash") - Note que GitBash não é o padrão de terminal do Visual Studio Code. Ao abrir o terminal integrado, no canto superior direito clique no > que esta com a concavidade para cima e selecione o Git Bash.
2. Execute:

```bash
ssh-keygen -t ed25519 -C "seu-email@exemplo.com" -f ~/.ssh/id_ed25519_agro
```

3. Quando solicitado:

   - Pressione `Enter` para aceitar o local sugerido
   - Pode deixar a senha em branco

---

## 🔐 2. Adicionar a chave SSH no GitHub

1. Execute:

```bash
cat ~/.ssh/id_ed25519_agro.pub
```

2. Copie o conteúdo exibido
3. Acesse [https://github.com/settings/keys](https://github.com/settings/keys)
4. Clique em **"New SSH key"**

   - Title: `Chave Agro`
   - Key: cole o conteúdo copiado

5. Clique em **Add SSH key**

---

## ⚖️ 3. Configurar o SSH para o projeto

1. Execute no Git Bash:
```bash
   mkdir -p ~/.ssh
```
2. Execute no Git Bash:  (Precisamos garantir que o arquivo não tenha extensão .txt, verifique isso em user/.ssh, a pasta é oculta) 
```bash
   mv ~/.ssh/config.txt ~/.ssh/config
```
3. Execute no Git Bash:

```bash
notepad ~/.ssh/config
```

3. Adicione:

```
Host github-agro
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_agro
  IdentitiesOnly yes
```

4. Salve e feche

---

## ✅ 4. Testar a conexão SSH

```bash
ssh -T git@github-agro
```

Se aparecer:

```
Hi NOME! You've successfully authenticated, but GitHub does not provide shell access.
```

✔️ Tudo certo!

---

## 📂 5. Clonar o repositório

Execute no Git Bash:

```bash
git clone git@github-agro:MarceloDChagas/Sistema-de-gestao-agropecuaria.git
```

Depois:

```bash
cd Sistema-de-gestao-agropecuaria
```

---

## 🚀 6. Instalar dependências e rodar

```bash
npm run setup # instala tudo, formata o codigo, aplica o lint e roda o backend e o frontend em paralelo
npm run dev      # roda os dois
npm run dev:frontend ou npm run dev:backend # roda separadamente
```

---

## 🚧 7. Fluxo de trabalho

### Atualizar o projeto:

```bash
git pull origin main
```

### Criar uma branch:

```bash
git checkout -b feat/minha-feature
```

### Commitar:

### Antes de commitar, consulte o seguinte artigo: https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657

```bash
git add .
git commit -m "feat: descricao da feature"
```

### Subir para o GitHub:

```bash
git push origin feat/minha-feature
```

### Abrir Pull Request

- Acesse o repositório no GitHub e clique em "Compare & pull request"

---

## ⬆️ Boas práticas

- Sempre use branches (nunca commit direto na main)
- Use mensagens de commit claras (`feat`, `fix`, `refactor`, etc.)
- Sempre faca mudancas pequenas
---
## 🏗️ Estrutura do Projeto

```
sistema-de-gestao-agropecuaria/
├── apps/                    # Aplicações principais
│   ├── frontend/           # Aplicação Next.js (Frontend)
│   └── backend/            # API Node.js (Backend)
├── packages/               # Pacotes compartilhados
├── .husky/                # Configuração do Husky (Git Hooks)
├── .eslintrc.json         # Configuração do ESLint
├── .prettierrc            # Configuração do Prettier
├── package.json           # Configuração principal do projeto
├── turbo.json             # Configuração do Turborepo
└── tsconfig.json          # Configuração base do TypeScript
```

## 📦 Tecnologias Principais

- **Next.js**: Framework React para frontend
- **Node.js**: Runtime para backend
- **TypeScript**: Superset JavaScript com tipagem estática
- **Prisma**: ORM para banco de dados
- **Turborepo**: Gerenciador de monorepo
- **ESLint**: Linter para código JavaScript/TypeScript
- **Prettier**: Formatador de código
- **Husky**: Git hooks para garantir qualidade do código
- **lint-staged**: Executa linters em arquivos staged

## 🛠️ Configurações

### ESLint (.eslintrc.json)

Configuração do linter para garantir qualidade e consistência do código:

- Suporte a TypeScript
- Regras específicas para React
- Integração com Prettier
- Configurações para ambiente Node.js e Browser

### Prettier (.prettierrc)

Configurações de formatação de código:

- Aspas simples
- Ponto e vírgula obrigatório
- Largura máxima de 80 caracteres
- 2 espaços para indentação

### Husky (.husky/)

Git hooks para automatizar tarefas:

- `pre-commit`: Executa lint-staged antes de cada commit
- Garante que o código está formatado e sem erros

### Turborepo (turbo.json)

Configuração do pipeline de build:

- Cache de builds
- Dependências entre pacotes
- Configurações de desenvolvimento
- Otimizações de performance

## 🚀 Scripts Disponíveis

```bash
# Instalação
npm install

# Desenvolvimento
npm run dev           # Inicia frontend e backend
npm run dev:frontend  # Apenas frontend
npm run dev:backend   # Apenas backend

# Linting e Formatação
npm run lint         # Executa ESLint
npm run format       # Executa Prettier

# Setup completo
npm run setup        # Instala dependências, formata e inicia
```

## 🔧 Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente (se necessário)
4. Execute o setup:
   ```bash
   npm run setup
   ```

## 📝 Convenções de Código

- TypeScript para tipagem estática
- ESLint para linting
- Prettier para formatação
- Commits seguindo Conventional Commits
- Branches seguindo Git Flow

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
