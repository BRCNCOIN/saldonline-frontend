// auth.js

function verificarLogin() {
  const usuario = localStorage.getItem("usuarioLogado");
  if (!usuario) {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.protegido === "true") {
    verificarLogin();
  }
});
