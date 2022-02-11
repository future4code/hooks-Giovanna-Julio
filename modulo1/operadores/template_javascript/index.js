// OPERADORES

// +++Interpretação

/* 1. a. false
      b. false
      c. true
      d. boolean
   2. O console imprimirá uma mensagem de erro de sintaxe na linha de 
      declaração da variável soma.
   3. Sem executar o código, a única possibilidade de erro que consigo
      enxergar é o prompt receber o input do usuário como string e não
      conseguir executar a variável soma. Para resolver isso, usaria o 
      operador Number() com os prompts dentro.*/

// +++Escrita

// Exercício 1      
    let userAge = Number(prompt("Type in your age"))
    let friendAge = Number(prompt("Type in your friend's age"))
    console.log("Are you the oldest?", userAge > friendAge)
    console.log("The age gap between you is", (userAge - friendAge), 
    "years!")

// Exercício 2
    let evenNumber = Number(prompt("Type in an even number"))
    console.log("The result of the division is", evenNumber%2)
    // c. O resultado é sempre zero enquanto o input for par.
    /* d. Se o input for um numero impar, o console vai devolver o 
          resto da divisão.*/

// Exercício 3 
    let ageInYears = Number(prompt("Type in your age"))
    let ageInDays = ageInYears*365

    console.log("Your age in months is", ageInYears*12+ "!")
    console.log("Your age in days is", ageInDays+ "!")
    console.log("Your age in hours is", ageInDays*24 + "!")

// Exercício 4
    let firstNumber = Number(prompt("Type in a number"))
    let secondNumber = Number(prompt("Type in a second number"))
   
    console.log("Is the first number bigger than the second?", 
    firstNumber>secondNumber)
    
    console.log("Is the first number equal to the second number?", 
    firstNumber===secondNumber)
    
    console.log("Is the first number divisible by the second number?", 
    firstNumber%secondNumber===0)
    
    console.log("Is the second number divisible by the first number?", 
    secondNumber%firstNumber===0)

// +++Desafio

// Exercício 1
    // a.
    let f77toK = (77-32)*(5/9) + 273.15
    console.log("The conversion results in", f77toK + "K")
    // b.
    let c80toF = 80*(9/5)+32
    console.log("The conversion results in", c80toF + "ºF")
    // c.
    let c30toF = 30*(9/5)+32
    let c30toK = (c30toF - 32)*(5/9) + 273.15
    console.log("The conversion results in", c30toF + "ºF", c30toK + "K")
    // d. 
    let celsiusValue = Number(prompt("Insert temp in Celsius"))
    let toFahr = celsiusValue *(9/5)+32
    let toKelvin = (toFahr - 32)*(5/9) + 273.15
    console.log("The conversion results in", toFahr + "ºF and", toKelvin
    + "K")

// Exercício 2 
    // a.
    let kwhUsage = Number(prompt("How many Kw/h were used this month?"))
    let bill = kwhUsage * (0.05)

    console.log("Your electric bill is $" + bill)

    // b.
    let reviewedBill = bill - (bill * (0.15))
    
    console.log("Your new total after the discount is $" + reviewedBill)

// Exercício 3
    // a.
    let twentyLbsToKg = 20/2.2046  
    console.log("20lbs are equal to", twentyLbsToKg + "kg.")

    // b.
    let tenOztoKg = 10.5*.03
    console.log("10.5oz are equal to", tenOztoKg + "kg.")

    // c. 
    let hunMilesToM = 100 * 1609.34
    console.log("100mi are equal to", hunMilesToM + "m.")

    // d. 
    let fiftyFtToM = 50 * 0.3048
    console.log("50ft are equal to", hunMilesToM + "m.")

    // e.
    let hunGalToL = 103.56 * 3.78541
    console.log("103.56gal are equal to", hunGalToL + "l.")

    // f.
    let fourfiftyCupToL = 450 * 0.237
    console.log("450 cups are equal to", fourfiftyCupToL + "l.")
    
    // g.
    let howManyLbs = (Number(prompt("Type in as many pounds as you'd like to convert into kilograms")))
    let lbsToKg = howManyLbs / 2.2046  
    console.log( howManyLbs, " equals", lbsToKg + "kg.")

