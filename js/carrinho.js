// carrinho.js

const carrinho = [
  { nome: "Mouse Gamer RGB", preco: 99.90 },
  { nome: "Teclado Mecânico", preco: 249.90 }
];

function exibirCarrinho() {
  const div = document.getElementById("carrinho");
  carrinho.forEach(item => {
    const p = document.createElement("p");
    p.textContent = `${item.nome} - R$ ${item.preco}`;
    div.appendChild(p);
  });
}

function finalizarCompra() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) {
    alert("Você precisa estar logado.");
    window.location.href = "login.html";
    return;
  }

  const pedido = {
    usuario: usuario.username,
    data: new Date().toISOString(),
    itens: carrinho
  };

  fetch("https://saldonline-api.onrender.com/pedidos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pedido)
  })
    .then(res => {
      if (res.ok) {
        alert("Pedido enviado com sucesso!");
        location.reload();
      } else {
        alert("Erro ao enviar pedido.");
      }
    });
}

document.addEventListener("DOMContentLoaded", exibirCarrinho);
