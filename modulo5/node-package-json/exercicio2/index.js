let num1 =  Number(process.argv[3])
let num2 =  Number(process.argv[4])

if (num1 && num2) {
    switch(process.argv[2]) {
        case "add":
            console.log (num1 + num2)
            break
        case "sub":
            console.log (num1 - num2)
            break
        case "mult":
            console.log (num1 * num2)
            break
        case "div":
            console.log (num1 / num2)
            break
        default:
            console.log ("Error")
    
    }
} else {
    console.log('A parameter is missing. Try writing the desired operatio and the two numbers chosen as arguments.')
}
