// 1a. process.argv[]

let nome = process.argv[2]
let idade = Number(process.argv[3])
let futuraIdade = idade + 7

if (nome && idade) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${futuraIdade}`)
} else {
    console.log("É necessáro informar nome e idade, nesta ordem. Tente novamente.")
}
