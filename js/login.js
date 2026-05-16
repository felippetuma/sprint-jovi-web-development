const loginForm = document.getElementById("loginForm");

function verificarLogin(event) {
    // Impede de recarregar a pagina
    event.preventDefault();

    // Verificar se os campos tem conteudo e se estao certos
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();

    if (email.includes("@") && email.length > 3 && senha.length >= 6) {
        const nome = prompt("Login bem-sucedido! Como voce gostaria de ser chamado?");
        if (nome !== null && nome.trim().length > 0) {
            alert(`Bem vindo ${nome.trim()}, estamos te redirecionando para outra pagina!`);
        } else {
            alert("Bem vindo, estamos te redirecionando para outra pagina!");
        }

        // Redirecionar para prox pagina
        window.location.href = "previas.html";
    } else {
        alert("Login invalido, algum dos dados inseridos estao incorretos");
    }
}

if (loginForm) {
    loginForm.addEventListener("submit", verificarLogin);
}