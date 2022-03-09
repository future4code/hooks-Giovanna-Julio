// LOOPS

// Exercícios de Interpretação

/* Exercício 01:
 * 
 * O console vai imprimir 4.
 * 
 */

/* Exercício 02:
 * 
 * a. O console vai imprimir os números 19, 21, 23, 25, 27 e 30.
 * 
 * b. For...of não seria o suficiente, teria que utilizar o For...in ou o método .entries().
 * 
 */

/* Exercício 03:
 * 
 * O console vai imprimir " * * * *"
 * 
 */

// Exercícios de Escrita

// Exercício 01:
    let pets = Number(prompt("How many pets do you have?"))
    
    if (pets <= 0) {
        console.log("Too bad!")
    } else {
        let petNamesArray = []
        for ( let i = 0; i < pets; i++) {
            let petNames = prompt("One by one, enter your pet's name")

            petNamesArray.push(petNames)
        }

        console.log(petNamesArray)
    }

// Exercício 02:
    let ogArray = [1, 2, 3, 4, 5]

// a.
    const printAllofIt = (arr) => {
        for (let i of arr) {
            console.log(i)
        }
    }
    printAllofIt(ogArray)

// b.
    const printAndDivideByTen = (arr) => {
        for (let i of arr) {
            console.log(i/10)
        }
    }

    printAndDivideByTen(ogArray)

// c.
    const printEvenOnes = (arr) => {
        for (let i of arr) {
            
            let evenArr = []
            
            if (i%2===0) {
                evenArr.push(i)
            } 
            console.log(evenArr)
        }
    }

    printEvenOnes(ogArray)

// d. 
    const printAsStr = (arr) => {
        for (let i of arr){
            console.log(`O elemento do índex ${i-1} é: numero ${i}`)
        }
    }

    printAsStr(ogArray)

// e. 
    const printBiggieSmalls = (arr) => {
        let biggie = 5
        let smalls = 1

    }


