// EXERCÍCIOS DE INTERPRETAÇÃO
/* 
    1. a. undefined
      b. null
      c. 11
      d. 3
      e. Array é impresso no console com o 19 no lugar do 4
      f. 9
    2. "SUBI NUM ONIBUS EM MIRROCOS 27"
*/

// EXERCÍCIOS DE ESCRITA

// Exercício 1
    let userName = prompt("Type in your name")
    let userEmail = prompt("Type in your e-mail")
    console.log(`E-mail ${userEmail} was successfully registered. Welcome, ${userName} !`)

//Exercício 2
    let favFoods = ["pancakes", "waffles", "fries", "cheese", "shrimp"]
    console.log(favFoods)

    console.log("These are my favorite foods:")
    console.log(favFoods[0])
    console.log(favFoods[1])
    console.log(favFoods[2])
    console.log(favFoods[3])
    console.log(favFoods[4])

    let usersFavFood = prompt("What is your favorite food?")
    favFoods.splice(1, 1, usersFavFood)
    console.log(favFoods)

// Exercício 3
    let toDoList = []
    let task1 = prompt("What is the first task?")
    let task2 = prompt("What is the second task?")
    let task3 = prompt("What is the third task?")

    toDoList.push(task1)
    toDoList.push(task2)
    toDoList.push(task3)
    console.log(toDoList)

    let whichOneWillPop = Number(prompt("Please type in the number corresponding to the task you have compleated")) - 1
    toDoList.splice(whichOneWillPop, 1)
    console.log(toDoList)

// DESAFIOS 

// Exercício 1
    let userText = prompt("Insert your text")
    let trimmedUserText = userText.trim()
    console.log(trimmedUserText.split(" "))

// Exercício 2
    let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    let pineapplePosition = array.indexOf("Abacaxi", 0)
    console.log(pineapplePosition, array.length)