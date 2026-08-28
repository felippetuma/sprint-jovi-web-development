let games = {
    1 : {
        name: "Jogo de Adivinhação",
        description: "Acerte qual é o numero sorteado!",
        activate: startGuessGame
    },
    2 : {
        name: "Contra o Relógio",
        description: "Acerte as equações em um tempo determinado!",
        activate: startClockGame
    },
    3 : {
        name: "Acerte a Equação",
        description: "Escreva a equação que tem como resultado o numero sorteado!",
        activate: startEquationGame
    },
}

function setupMain() {
    let keepAsking = true

    while ( keepAsking ) {
        let message = "Escolha um dos jogos para participar:\n\n";

    for ( let key in games ) {
        message += `${key} - ${games[key].name}: ${games[key].description}\n`;
    }

    let chosenGame = prompt(message);

    if ( games[chosenGame] ) {
        games[chosenGame].activate();
        keepAsking = false
    } else {
        alert("Opção inválida!")
        keepAsking = true
    }
    }

}

function startGuessGame() {
    print("Game 1")
}

function startClockGame() {
    print("Game 2")
}

function startEquationGame() {
    print("Game 3")
}