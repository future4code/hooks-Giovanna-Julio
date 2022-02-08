/* 1. 10
      5 */
// 2. 10 10 10
/* 3. horasTrabalhadasDia
      valorRecebidoDia */

let username;
let age;
console.log(typeof username, typeof age);
/* O resultado é undefined undefined, pois nenhuma das variáveis tem 
algum valor declarado. */

username = prompt("What's your name?");
age = prompt("How old are you?");
console.log(typeof username, typeof age);
/* O resultado é string string, pois todo input no comando prompt() é
uma string. */
console.log("Hello", username +  ", you are", age, "years old!");

let hat = prompt("Are you wearing a hat?");
let shoes = prompt("Are you wearing shoes?");
let gloves = prompt("Are you wearing gloves?");
console.log("Are you wearing a hat?", hat + ". Are you wearing shoes?",
shoes + ". Are you wearing gloves?", gloves);

let a = 10;
let b = 25;
let c = b;
b = a;
a = c;
console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10

let firstInput = Number(prompt("Type in the first number"));
let secondInput = Number(prompt("Type in the second number"));
let x = firstInput + secondInput
let y = firstInput * secondInput
console.log("If you add'em you get", x + ", if you multiply'em then get", y)