// admin.js

function carregarPedidos() {
  fetch("https://saldonline-api.onrender.com/pedidos")
    .then(res => res.json())
    .then(pedidos => {
      const div = document.getElementById("pedidos");
      div.innerHTML = "";

      if (pedidos.length === 0) {
        div.textContent = "Nenhum pedido encontrado.";
        return;
      }

      pedidos.forEach(p => {
        const container = document.createElement("div");
        container.style.border = "1px solid #ccc";
        container.style.padding = "10px";
        container.style.margin = "10px 0";

        const titulo = document.createElement("h3");
        titulo.textContent = `Usuário: ${p.usuario} | Data: ${new Date(p.data).toLocaleString()}`;

        const lista = document.createElement("ul");
        let total = 0;

        p.itens.forEach(item => {
          const li = document.createElement("li");
          li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
          lista.appendChild(li);
          total += item.preco;
        });

        const totalP = document.createElement("p");
        totalP.textContent = `Total: R$ ${total.toFixed(2)}`;

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = () => excluirPedido(p.id);

        container.appendChild(titulo);
        container.appendChild(lista);
        container.appendChild(totalP);
        container.appendChild(btnExcluir);
        div.appendChild(container);
      });
    });
}

function excluirPedido(id) {
  if (!confirm("Tem certeza que deseja excluir este pedido?")) return;

  fetch(`https://saldonline-api.onrender.com/pedidos/${id}`, {
    method: "DELETE"
  }).then(res => {
    if (res.ok) {
      alert("Pedido excluído com sucesso!");
      carregarPedidos();
    } else {
      alert("Erro ao excluir o pedido.");
    }
  });
}

document.addEventListener("DOMContentLoaded", carregarPedidos);
