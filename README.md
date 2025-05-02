# 🛒 Saldãonline - Loja Virtual

O melhor da internet por menos!  
Projeto de loja virtual com autenticação, carrinho de compras e painel de administração.

## 🌐 Link do site
[https://brcncoin.github.io/saldonline-frontend](https://brcncoin.github.io/saldonline-frontend)

## 🔧 Tecnologias
- HTML, CSS, JavaScript (Vanilla)
- LocalStorage para sessão do usuário
- JSON Server (Render) como back-end

## 📁 Funcionalidades

### 🧑 Login (`login.html`)
- Usuários cadastrados acessam a loja com nome de usuário e senha
- Dados buscados da API em: `https://saldonline-api.onrender.com/usuarios`

### 🛍️ Loja (`index.html`)
- Página protegida (só acessível após login)
- Simulação de produtos

### 🛒 Carrinho (`carrinho.html`)
- Mostra itens adicionados ao carrinho
- Botão "Finalizar compra" envia pedido para a API

### 📦 Pedidos Admin (`admin.html`)
- Exibe todos os pedidos feitos
- Permite excluir qualquer pedido
- Protegido por autenticação

## 🖥️ Backend (API)
Hospedado via Render:  
🔗 [`https://saldonline-api.onrender.com`](https://saldonline-api.onrender.com)

Endpoints principais:
- `GET /usuarios`
- `GET/POST /pedidos`
- `DELETE /pedidos/:id`

---

## ✅ Como rodar localmente (opcional)
1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/saldonline-frontend.git
```
2. Abra o `index.html` com um navegador

---

## 🙋‍♂️ Criado por
Projeto didático por [@seunome] com auxílio do ChatGPT.
