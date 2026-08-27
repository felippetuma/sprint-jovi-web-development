const loginForm = document.getElementById("loginForm");


function verificarLogin(event) {
    // Impede de recarregar a pagina
    event.preventDefault();

    // Verificar se os campos tem conteudo e se estao certos
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();

    if (email.includes("@") && email.length > 3 && senha.length >= 6) {
        const userRegistered = localStorage.getItem("userRegistered");
        const nameUser = localStorage.getItem("nameUser");

        if (!userRegistered || !nameUser) {
            const name = prompt("Login bem-sucedido! Como você gostaria de ser chamado?");
            if(name !== null && name.trim().length > 0) {
                localStorage.setItem("nameUser", name.trim());
                localStorage.setItem("userRegistered", "true");
                alert(`Bem-vindo ${name.trim()}, estamos te redirecionando para outra página!`);
            } else {
                alert("Bem-vindo, estamos te redirecionando para outra página!");
            }
        } else {
            alert(`Bem-vindo ${nameUser}, estamos te redirecionando para outra página!`);
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