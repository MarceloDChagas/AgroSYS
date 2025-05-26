# 🚠 Guia para Colaboradores no Windows – Sistema de Gestão Agropecuária

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
notepad ~/.ssh/config
```

2. Adicione:

```
Host github-agro
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_agro
  IdentitiesOnly yes
```

3. Salve e feche

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
git clone git@github-agro:mlcr1/Sistema-de-gestao-agropecuaria.git
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
