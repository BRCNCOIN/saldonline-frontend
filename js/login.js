// login.js

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://saldonline-api.onrender.com/usuarios")
    .then(res => res.json())
    .then(users => {
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem("usuarioLogado", JSON.stringify(user));
        window.location.href = "index.html";
      } else {
        alert("Usuário ou senha inválidos");
      }
    });
}
