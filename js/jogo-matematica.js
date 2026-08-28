let games = {
    1 : {
        name: "Jogo de Adivinhação",
        description: "Acerte qual é o numero sorteado entre 1 a 100",
        activate: startGuessGame
    },
    2 : {
        name: "Jogo de Tabuada",
        description: "Sorteia dois numeros e uma operação, e acerte o resultado!",
        activate: startClockGame
    },
    3 : {
        name: "Par ou Impar",
        description: "Acerte se o numero é par ou impar!",
        activate: startEquationGame
    },
}

export function setupMain() {
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

function getRandomNumber(min, max) {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);

  return Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded;
}

function startGuessGame() {
    let keepPlaying = true

    while ( keepPlaying ) {
        let generatedNumber = getRandomNumber(1, 100)

        let chosenNumber = Number(prompt(
            "Um numero aleatorio foi gerado! \n" +
            "Digite um numero:"
        ))

        while ( true ) {
            if ( chosenNumber < generatedNumber ) {
                chosenNumber = Number(prompt(
                    `O numero aleatorio é MAIOR que ${chosenNumber} \n` +
                    "Digite um novo numero:"
                ))
            } else if ( chosenNumber > generatedNumber ) {
                chosenNumber = Number(prompt(
                    `O numero aleatorio é MENOR que ${chosenNumber} \n` +
                    "Digite um novo numero:"
                ))
            } else {
                alert(`Você adivinhou! O numero aleatorio era ${generatedNumber}`)
                break
            }
        }

        let shouldContinue = prompt("Deseja continuar a jogar? (Y/N): ").toUpperCase()

        if ( shouldContinue == "Y" ) {
            keepPlaying = true
        } else if ( shouldContinue == "N" ) {
            keepPlaying = false
        } else {
            alert("Opção invalida! Saindo do jogo..")
            keepPlaying = false
        }
    }
}

function startTableGame() {

}

function startOddEvenGame() {

}