// OBJETOS

// Exercícios de Interpretação

/* 1. a. Matheus Nachtergaele, Virginia Cavendish e canal: "Globo", horario: "14h".
 *
 * 2. a.
 *      nome: "Juca", 
 *	    idade: 3, 
 *	    raca: "SRD"
 *      nome: "Juba", 
 *  	idade: 3, 
 *	    raca: "SRD"
 *      nome: "Jubo", 
 *	    idade: 3, 
 *	    raca: "SRD"
 *    b. Os três pontos copiam um objeto ou array. 
 * 
 * 3. a. pessoa[false]
 *    b. pessoa[undefined]
 */

 // Exercícios de Escrita

 // 1. a.
        const namesAndNicks = {
            name: "Gina",
            nicknames: ["Gi", " Gio", " Gigi"]
        }

        const concatNamesAndNicksFunct = (object) => {
            let name = object.name
            let nicks = object.nicknames
            console.log(`I'm ${name}, but you can call me: ${nicks}`)
        }
        
        concatNamesAndNicksFunct(namesAndNicks)

// 1. b.
        const newNamesAndNicks = {...namesAndNicks, nicknames: ["Tuti", " Tutu", " Tebas"]}

        concatNamesAndNicksFunct(newNamesAndNicks)

// 2. a. 
        const object1 = {
            name: "Gina",
            age: 23,
            job: "English instructor"
        }

        const object2 = {
            name: "Nones",
            age: 23,
            job: "Hotel receptionist"
        }

// 2. b.
        const arrayObjectsFunct = (object) => {
            let newArray = [object.name, object.name.length, object.age, object.job, object.job.length];
            console.log(newArray);
        }

        arrayObjectsFunct(object1)
        arrayObjectsFunct(object2)
    
// 3. a.
        let cart = []

// 3. b.
        const fruit1 = {
            name: "raspberry",
            availability: true
        }

        const fruit2 = {
            name: "lime",
            availability: true
        }

        const fruit3 = {
            name: "blackberry",
            availability: true
        }

// 3. c. 
        const fruitFunction = (fruit) => {
            cart.push(fruit.name)
        }

        fruitFunction(fruit1)
        fruitFunction(fruit2)
        fruitFunction(fruit3)

// 3. d.
        console.log(cart)

// Desafios

// 1. 
        const userInfo = () => {
            let username = prompt("Enter your name")
            let userAge = Number(prompt("Enter your age"))
            let userJob = prompt("What's your job?")

            const userObject = {
                name: username,
                age: userAge,
                job: userJob
            }

            console.log(userObject)
            console.log(typeof userObject)
        }

        userInfo()

// 2. 
        const movies = (movieObj1, movieObj2) => {
            movieObj1 = {
                releaseYear: 2012,
                name: "2012"
            }

            movieObj2 = {
                releaseYear: 2021,
                name: "Soul"
            }

            console.log(`${movieObj1.name} was released before ${movieObj2.name}?`, (movieObj1.releaseYear < movieObj2.releaseYear))
            console.log(`${movieObj1.name} was released along with ${movieObj2.name}?`, (movieObj1.releaseYear == movieObj2.releaseYear))
        }       
        
        movies()

// 3.
        const fruitAvailability = (fruit) => {
            fruit.availability = !fruit.Availability
            return fruit
}

// End of code