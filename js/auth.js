const API_URL = "https://saldonline-api.onrender.com";

document.getElementById("form-login").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const isCadastro = document.getElementById("cadastro").checked;

  if (isCadastro) {
    const response = await fetch(`${API_URL}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    if (response.ok) {
      const user = await response.json();
      localStorage.setItem("usuarioLogado", JSON.stringify(user));
      window.location.href = "index.html";
    } else {
      alert("Erro ao cadastrar");
    }
  } else {
    const response = await fetch(`${API_URL}/usuarios?username=${username}&password=${password}`);
    const users = await response.json();
    if (users.length > 0) {
      localStorage.setItem("usuarioLogado", JSON.stringify(users[0]));
      window.location.href = "index.html";
    } else {
      alert("Usuário ou senha inválidos");
    }
  }
});