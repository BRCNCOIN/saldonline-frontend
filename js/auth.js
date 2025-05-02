// Funções de autenticação

// Verifica se está logado ao carregar a página
function verificarLogin() {
    const user = localStorage.getItem("usuarioLogado");
    const paginaProtegida = !location.pathname.includes("login.html");

    if (!user && paginaProtegida) {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "login.html";
    }
}

// Logout
function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
}

// Executar verificação ao carregar
verificarLogin();
