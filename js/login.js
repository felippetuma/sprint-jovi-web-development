let loginForm = document.getElementById("loginForm");

function verificarLogin() {

    // Impede de recarregar a página
    event.preventDefault();

    // Verificar se os botões tem conteudo e se estão certos
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    if (email.includes("@") && senha.length >= 6) {
        let nome = prompt("Login bem-sucedido! Como você gostaria de ser chamado?");
        alert(`Bem vindo ${nome}, estamos te redirecionando para outra pagina!`)

        // Redirecionar para prox pagina
        window.location.href = "previas.html";
    } else {
        alert("Login invalido, Algum dos dados inseridos estão incorretos");
    }
    

}