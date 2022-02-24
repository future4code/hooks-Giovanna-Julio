// CONDICIONAIS

/* Exercícios de Interpretação
 * 
 * Exercício 1:
 *  
 *  a. O código testa se o número inserido pelo usuário é 
 *     par.
 * 
 *  b. Pares.
 * 
 *  c. Ímpares.
 * 
 * Exercício 2:
 *  
 *  a. O código serve para informar oo usuário sobre o
 *     preço de uma determinada fruta.
 *  
 *  b. O preço da fruta Maçã é R$ 2.25
 * 
 *  c. O preço da fruta Pêra é R$ 5.5
 *     O preço da fruta null é R$ 5
 * 
 * Exercício 3:
 * 
 *  a. A primeira linha está recebendo uma string de um 
 *     usuário e a transformando para number
 * 
 *  b. Para o número 10: Esse número passou no teste 
 *     undefined
 *     Para o número -10: undefined
 * 
 *  c. O console não conseguirá imprimir a mensagm da 
 *      variável mensagem, pois a variável foi declarada no 
 *      escopo local da função e só pode ser acessada 
 *      dentro deste escopo.
 * 
 */

// Exercícios de Escrita

// Exercício 1:

    let userage = Number(prompt("How old are you?"))

    if (userage >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }

// Exercício 2:

    let period = prompt("Enter what period do you watch classes during. 'M' for Mornings, 'A' for Afternoons, or 'N' for Nights")

    let formatedPeriod = period.toUpperCase().trim()

    if (formatedPeriod === "M") {
        console.log("Good morning!")
    } else if (formatedPeriod === "A") {
        console.log("Good Afternoon!")
    } else if (formatedPeriod === "N") {
        console.log("Good Night!")
    } else {
        console.log("She doesn't even go here!")
    }

// Exercício 3:

    switch(formatedPeriod) {
        case "M" :
            console.log("Good morning!")
            break
        case "A" :
            console.log("Good Afternoon!")
            break
        case "N" :
            console.log("Good Night!")
            break
        default:
            console.log("She doesn't even go here!")
            break
    }

// Exercício 4:
    wantedMovieKind = "fantasia"
    budgetForTicket = 15

    movieKind = prompt("What kind of movie are you watching?")
    costOfTicket = Number(prompt("How much is the ticket?"))

    let formatMovieKind = movieKind.toLowerCase().trim()

    if ((wantedMovieKind === formatMovieKind) && (costOfTicket <= budgetForTicket)) {
        console.log("Have fun!")
    } else {
        console.log("Please choose another movie :(")
    }

// Desafios

// Exercício 1:
   
    if ((wantedMovieKind === formatMovieKind) && (costOfTicket <= budgetForTicket)) {
        let userSnack = prompt("What kind of snack would you like?")
        console.log(`Have fun! And enjoy your ${userSnack}`)
    } else {
        console.log("Please choose another movie :(")
    }

// Exercício 2:

    const soccerFanInfo = {
        name : prompt("Enter your name"),
        type : prompt("Enter 'IN' for international games or 'DO for domestic games"),
        phase : (prompt("Enter SF for semi-finals, TD for third-place decision, or 'FI' for finals")).toUpperCase(),
        category: Number(prompt("Enter the game category (1, 2, 3, or 4)")),
        howMany: Number(prompt("How many tickets do you wish to purchase?"))
    }


    const dollar =  4.10

    if (soccerFanInfo.category === 1) {
        if (soccerFanInfo.phase === "SF") {
            if (soccerFanInfo.type === "IN") {
                console.log("Your total is", 1320*soccerFanInfo.howMany*dollar)
            } else {
                console.log("Your total is", 1320*soccerFanInfo.howMany)
            }
        } else if (soccerFanInfo.phase === "TD") {
            if (soccerFanInfo.type === "IN") {
                console.log("Your total is", 660*soccerFanInfo.howMany*dollar)
            } else {
                console.log("Your total is", 660*soccerFanInfo.howMany)
            }
        } else if ( soccerFanInfo.phase === "FI") {
            if (soccerFanInfo.type === "IN") {
                console.log("Your total is", 1980*soccerFanInfo.howMany*dollar)
            } else {
                console.log("Your total is", 1980*soccerFanInfo.howMany)
            }
        }
    } else if (soccerFanInfo.category === 2) {
        if (soccerFanInfo.phase === "SF") {
            if (soccerFanInfo.type === "IN") {
                console.log("Your total is", 880*soccerFanInfo.howMany*dollar)
            } else {
                console.log("Your total is", 880*soccerFanInfo.howMany)
            }
        } else if (soccerFanInfo.phase === "TD") {
            if (soccerFanInfo.type === "IN") {
                console.log("Your total is", 440*soccerFanInfo.howMany*dollar)
            } else {
                console.log("Your total is", 440*soccerFanInfo.howMany)
            }
        } else if ( soccerFanInfo.phase === "FI") {
            if (soccerFanInfo.type === "IN") {
                console.log("Your total is", 1320*soccerFanInfo.howMany*dollar)
            } else {
                console.log("Your total is", 1320*soccerFanInfo.howMany)
            }
        }
    } else if (soccerFanInfo.category === 3) {
            if (soccerFanInfo.phase === "SF") {
                if (soccerFanInfo.type === "IN") {
                    console.log("Your total is", 550*soccerFanInfo.howMany*dollar)
                } else {
                    console.log("Your total is", 550*soccerFanInfo.howMany)
                }
            } else if (soccerFanInfo.phase === "TD") {
                if (soccerFanInfo.type === "IN") {
                    console.log("Your total is", 330*soccerFanInfo.howMany*dollar)
                } else {
                    console.log("Your total is", 330*soccerFanInfo.howMany)
                }
            } else if ( soccerFanInfo.phase === "FI") {
                if (soccerFanInfo.type === "IN") {
                    console.log("Your total is", 880*soccerFanInfo.howMany*dollar)
                } else {
                    console.log("Your total is", 880*soccerFanInfo.howMany)
                }
            }
    } else if (soccerFanInfo.category === 4) {
            if (soccerFanInfo.phase === "SF") {
                if (soccerFanInfo.type === "IN") {
                    console.log("Your total is", 220*soccerFanInfo.howMany*dollar)
                } else {
                    console.log("Your total is", 220*soccerFanInfo.howMany)
                }
            } else if (soccerFanInfo.phase === "TD") {
                if (soccerFanInfo.type === "IN") {
                    console.log("Your total is", 170*soccerFanInfo.howMany*dollar)
                } else {
                    console.log("Your total is", 170*soccerFanInfo.howMany)
                }
            } else if ( soccerFanInfo.phase === "FI") {
                if (soccerFanInfo.type === "IN") {
                    console.log("Your total is", 330*soccerFanInfo.howMany*dollar)
                } else {
                    console.log("Your total is", 330*soccerFanInfo.howMany)
                }
            }
        } else {
            console.log("An error has occured")
        } 
    

    console.log(`Thank you ${soccerFanInfo.name}, you've purchased ${soccerFanInfo.howMany} tickets for a catergory ${soccerFanInfo.category}, ${soccerFanInfo.phase} phase, ${soccerFanInfo.type} game!!!`)
