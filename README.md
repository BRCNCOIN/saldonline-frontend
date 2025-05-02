
# Saldãonline 🛒

**Saldãonline** é uma loja online moderna com visual vibrante, sistema de login e cadastro, integração com uma API REST e página de checkout.  
Frontend hospedado no GitHub Pages e backend gratuito no Render com JSON Server.

---

## 🌐 Acesse

- **Frontend (GitHub Pages)**: [https://brcncoin.github.io/saldonline-frontend/](https://brcncoin.github.io/saldonline-frontend/)
- **Backend API (Render)**: [https://saldonline-api.onrender.com](https://saldonline-api.onrender.com)

---

## 🔐 Funcionalidades

- Tela de login com imagem de fundo e Bootstrap 5
- Cadastro de usuários com envio direto para a API (`/usuarios`)
- Proteção por autenticação (armazenada em `localStorage`)
- Exibição de produtos da API (`/produtos`)
- Carrinho de compras com localStorage
- Página de checkout com resumo e confirmação de pedido
- Estilo moderno e responsivo (HTML5 + CSS + Bootstrap)

---

## 🚀 Como usar

1. Faça login com um usuário existente ou cadastre um novo.
2. Acesse a loja (`index.html`) e adicione produtos ao carrinho.
3. Vá até o `checkout.html` para finalizar a compra.

---

## 🛠️ Tecnologias

- HTML5, CSS3, JavaScript
- Bootstrap 5
- JSON Server (Render)
- GitHub Pages

---

## 📁 Estrutura

```
📦 saldonline
├── index.html
├── login.html
├── checkout.html
├── style.css
├── login.js
├── loja.js
├── README.md
```

---

## 📌 Observações

- A API pode "dormir" no Render se estiver inativa. Aguarde alguns segundos ao acessar.
- Os dados são públicos e resetáveis.

---

Desenvolvido com 💙 para demonstrar uma loja funcional com autenticação e frontend moderno.
