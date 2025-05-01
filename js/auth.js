let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById("form-title").innerText = isLogin ? "Login" : "Cadastro";
  document.querySelector("button").innerText = isLogin ? "Entrar" : "Cadastrar";
  document.querySelector("p").innerText = isLogin
    ? "Não tem conta? Cadastre-se"
    : "Já tem conta? Faça login";
  document.getElementById("error-msg").innerText = "";
}

function submitForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (!username || !password) {
    errorMsg.innerText = "Preencha todos os campos.";
    return;
  }

  const url = 'https://sua-api.onrender.com/usuarios';

  if (isLogin) {
    fetch(`${url}?username=${username}&password=${password}`)
      .then(res => res.json())
      .then(users => {
        if (users.length > 0) {
          localStorage.setItem("usuarioLogado", JSON.stringify(users[0]));
          window.location.href = "index.html";
        } else {
          errorMsg.innerText = "Usuário ou senha inválidos.";
        }
      });
  } else {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    .then(() => {
      localStorage.setItem("usuarioLogado", JSON.stringify({ username, password }));
      window.location.href = "index.html";
    });
  }
}