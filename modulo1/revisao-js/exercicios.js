// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = array.filter((array) => {
        return array % 2 === 0;
    });

    return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = array.filter((array) => {
        return array % 2 === 0;
    });

    let arrayElevado = novoArray.map((novoArray) => {
        return Math.pow(novoArray, 2);
    });

    return arrayElevado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i = 0;

    let maior = -Infinity;
    for (i; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maior
    let menor

    if (num1 > num2) {
        maior = num1
        menor = num2
    } else if (num2 > num1) {
        maior = num2
        menor = num1
    } else {
        maior = num1
        menor = num2
    }

    let divisivel

    if (maior % menor === 0) {
        divisivel = true
    } else {
        divisivel = false
    }

    let objetoNumerico = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: maior - menor
    }

    return objetoNumerico
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        } else {
            n++
        }
    }

    return arr
}
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    let novoArray = [array[array.length - 2], array[1]]
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atoresDoFilme = filme.atores.join(", ")
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresDoFilme}.`
 }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) { }

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) { }

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) { }

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) { }

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) { }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) { }
