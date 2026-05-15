
function startChatbot() {
    let keepAsking = true 

    while (keepAsking) {
        const escolha = prompt(
        "Bem-vindo ao JOVI Chatbot!\n\n" +
        "1. O que o Modo Pet faz?\n" +
        "2. Como funciona o Modo Documentos?\n" +
        "3. Falar com um humano\n\n" +
        "Digite o número da opção desejada:"
        );

        switch(escolha) {
        case "1":
            alert("O Modo Pet tenta chamar a atenção do seu animal, com opções predefinidas ou feitas pelo usuario!");
            break;
        case "2":
            alert("Basta centralizar qualquer tipo de texto na câmera e você será exibido com algumas opções como: Digitalizar, Lembrete, Compartilhar, Traduzir e outros!");
            break;
        case "3":
            alert("O suporte está indisponivel no momento, tente novamente mais tarde!");
            break;
        case null:
            // Aq é só se o usuario cancelo o prompt de alguma forma
            keepAsking = false
            break;
        default:
            alert("Opção inválida. Tente digitar um número de 1 a 3.");
    }
    }
    
}


let slides = [
    "assets/imgs/modo-pet.png",
    "assets/slidesImgs/dachshund.jpg",
    "assets/slidesImgs/pug.jpg",
];

let slideIndex = 0;

function startSlideshow() {
    let fileImage = document.getElementById("slideshow-pet");

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0
    }

    let choosenImage = slides[slideIndex];
    fileImage.src = choosenImage;
}


function startDocumentos() {
    alert("Nenhum documento encontrado, para mais informações veja o Chatbot!")
}
