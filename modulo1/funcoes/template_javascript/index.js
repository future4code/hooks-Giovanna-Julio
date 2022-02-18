// FUNÇÕES

// Exercícios de interpretação 
// Exercíco 1
    /* 1. a. 10 50
    *    b. Não apareceria nada do console. 
    * 
    * 2. a. A função recebe uma string, a deixa completamente em lower case e verifica se *       a palavra cenoura está na string.
    *    b. i. eu gosto de cenoura true
    *       ii. cenoura é bom pra vista true
    *       iii. cenouras crescem na terra true 
    */

// Exercícios de escrita
// Exercício 1
    // a. 
        const myInfo = () => {
            console.log("My name is Giovanna, I'm 23, I'm from Curitiba but I'm also american :)")
        }

    // b.
        const userInfo = (name, age, town, job) => {
            name = prompt("What's your name?")
            age = prompt("How old are you?")
            town = prompt("Where do you live?")
            job = prompt ("What do you do for a living?")
            
            console.log(`My name is ${name}, I'm ${age}, I live in ${town} working as a ${job}`)
        }

// Exercício 2
    // a. 
        const sumNumbers = (num1, num2) => {
            let adding = num1 + num2 
            return adding
        }

        console.log(sumNumbers(1,2))

    // b. 
        const booleanSum = (num1, num2) => {
            let compare = num1 >= num2
            return compare
        }
    
    // c. 
        const evenCheck = (num) => {
            let isItEven = num%2 === 0
            return isItEven
        }
    
    // d. 
        const message = (text) => {
            let userMessage = prompt("Enter your message")
            console.log(userMessage.length.toUpperCase())
        }

// Exercício 3
        const add = (num1, num2) => {
            let sum = num1 + num2
            return sum
        }

        const take = (num1, num2) => {
            let minus = num1 - num2
            return minus
        }

        const multiply = (num1, num2) => {
            let times = num1 * num2
            return times
        }

        const divide = (num1, num2) => {
            let divideBy = num1 / num2
            return divideBy
        }

        const input1 = Number(prompt("Enter a number"))
        const input2 = Number(prompt("Enter another number"))

        console.log(`Entries: ${input1} and ${input2}`)
        console.log(`Sum:`, add(input1, input2))
        console.log(`Difference:`, take(input1, input2))
        console.log(`Multiplication:`, multiply(input1, input2))
        console.log(`Division:`, divide(input1, input2))
