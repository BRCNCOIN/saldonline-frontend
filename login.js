

function cadastrar() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Preencha usuário e senha");
    return;
  }

  fetch("https://saldonline-api.onrender.com/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (res.ok) {
        alert("Usuário cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar.");
      }
    });
}
