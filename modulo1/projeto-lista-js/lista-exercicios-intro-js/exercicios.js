// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = Number(prompt("Digite a altura"))
  const larguraRetangulo = Number(prompt("Digite a largura"))
  console.log(alturaRetangulo * larguraRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento"))
  let idadeUsuário = anoAtual - anoNascimento
  console.log(idadeUsuário)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = prompt("Digite seu nome")
  let idadeUsuario = Number(prompt("Digite sua idade"))
  let emailUsuario = prompt("Digite seu email")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt("Digite a primeira cor")
  const corFavorita2 = prompt("Digite a segunda cor")
  const corFavorita3 = prompt("Digite a terceira cor")
  arrayResultante = [corFavorita1, corFavorita2, corFavorita3]
  console.log(arrayResultante)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoStr1 = string1.length
  const tamanhoStr2 = string2.length
  return tamanhoStr1 === tamanhoStr2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const quantosElementos = array.length 
  return array[quantosElementos-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const novaStr1 = string1.toUpperCase() 
  const novaStr2 = string2.toUpperCase()
  return novaStr1 === novaStr2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const esseAno = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento"))
  const anoEmissaoCNH = Number(prompt("Digite o ano de emissão da sua CNH"))

  const idadeCondutor = (esseAno - anoNascimento)
  
  const menorIdade = idadeCondutor < 18 
  const temVinteOuMenos = (18 < idadeCondutor <= 20) // true false
  const temEntreTwentyNFifty = (20 < idadeCondutor <= 50) 
  const temMaisdeFifty = (idadeCondutor > 50)
  
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
