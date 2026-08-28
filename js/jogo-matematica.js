let games = {
    1 : {
        name: "Jogo de Adivinhação",
        description: "Acerte qual é o numero sorteado entre 1 a 100",
        activate: startGuessGame
    },
    2 : {
        name: "Jogo de Tabuada",
        description: "Sorteia dois numeros e uma operação, e acerte o resultado!",
        activate: startTableGame
    },
    3 : {
        name: "Par ou Impar",
        description: "Acerte se o numero é par ou impar!",
        activate: startOddEvenGame
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

function shouldContinue() {
    let answer = prompt("Deseja continuar a jogar? (Y/N): ").toUpperCase()

    if ( answer == "Y" ) {
        return true
    } else if ( answer == "N" ) {
        return false
    } else {
        alert("Opção invalida! Saindo do jogo..")
        return false
    }
}

function getRandomNumber(min, max) {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);

  return Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded;
}

function calculateAnswer(numberA, numberB, operation) {
    switch (operation) {
        case "x":
            return numberA * numberB
        case "-":
            return numberA - numberB
        case "+":
            return numberA + numberB
        case "/":
            return numberA / numberB
        default:
            return null
    }
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

        keepPlaying = shouldContinue()
    }
}

function startTableGame() {
    let operations = ["x", "-", "+", "/"]
    let keepPlaying = true

    while ( keepPlaying ) {
        let numberA = getRandomNumber(1, 10)
        let numberB = getRandomNumber(1, 10)
        let chosenOperation = operations[getRandomNumber(0, operations.length - 1)]

        let correctAnswer = calculateAnswer(numberA, numberB, chosenOperation)

        let answer = Number(prompt(`Qual o resultado de ${numberA} ${chosenOperation} ${numberB}?`))

        if ( answer === correctAnswer ) {
            alert("Acertou! Parabéns!")
        } else {
            alert(`Errou! A resposta correta era ${correctAnswer}`)
        }

        keepPlaying = shouldContinue()
    }
}

function startOddEvenGame() {
    let keepPlaying = true

    while ( keepPlaying ) {
        let generatedNumber = getRandomNumber(1, 100)
        let isEven = generatedNumber % 2 == 0

        let answer = prompt("O numero sorteado é PAR ou IMPAR?").toUpperCase()

        while ( true ) {
            if ( answer == "PAR" || answer == "IMPAR" ) {
                if ( (answer == "PAR" && isEven) || (answer == "IMPAR" && !isEven) ) {
                    alert(`Você acertou! O numero era ${generatedNumber}`)
                } else {
                    alert(`Você errou! O numero era ${generatedNumber}`)
                }
                break
            } else {
                answer = prompt("Resposta invalida! Digite PAR ou IMPAR:").toUpperCase()
            }
        }

        keepPlaying = shouldContinue()
    }
}