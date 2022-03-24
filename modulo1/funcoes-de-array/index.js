/* nome: 'Amanda Rangel', apelido: 'Mandi' e o array original;{nome: 'Letícia Chijo', apelido: 'Chijo'} e o array original; {nome: 'Laís Petra', apelido: 'Laura'} e o array original.*/

// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

// [{nome: 'Amanda Rangel', apelido: 'Mandi'} {nome: 'Laís Petra', apelido: 'Laura'}]

// 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a.

const soNomes = pets.map((pets)=>{
    return pets.nome
})
console.log(soNomes)

// b.

const soSalsicha = pets.filter((pets)=>{
    return pets.raca === "Salsicha"
})
console.log(soSalsicha)

// c.

const soPoodles = pets.filter((pets)=>{
    return pets.raca === "Poodle"
})

const mensagemPoodles = soPoodles.map((soPoodles)=>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${soPoodles.nome}}!`
})
console.log(mensagemPoodles)

// 2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a.

const soNomesProdutos = produtos.map((produtos)=>{
    return produtos.nome
})
console.log(soNomesProdutos)

// b.

const nomeMaisPrecosDesconto = produtos.map((produtos)=>{
    return produtos.nome + " " + (produtos.preco - (produtos.preco * 0.15)).toFixed(2)
})

console.log(nomeMaisPrecosDesconto)

// c. 

const soBebidas = produtos.filter((produtos)=>{
    return produtos.categoria === "Bebidas"
})

console.log(soBebidas)

// d. 

const soYpe = produtos.filter((produtos)=>{
    return produtos.nome.includes("Ypê")===true
})
console.log(soYpe)

// e.

const mensagemYpe = soYpe.map((soYpe)=>{
    return `Compre ${soYpe.nome} por R$${soYpe.preco}!`
})
console.log(mensagemYpe)

// Desafios:

let pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
