/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de BlackJack!")

if (confirm("Deseja iniciar uma nova rodada?")) {
   const humano = {
      carta1 : comprarCarta(),
      carta2 : comprarCarta()
   }

   const computador = {
      carta1 : comprarCarta(),
      carta2 : comprarCarta() 
   }

   const pontuacaoHumana = humano.carta1.valor + humano.carta2.valor
   const pontuacaoComputador = computador.carta1.valor + computador.carta2.valor

   console.log(`Usuário -> Cartas: ${humano.carta1.texto} ${humano.carta2.texto} - Pontuação: ${pontuacaoHumana}.`)

   console.log(`Computador -> Cartas: ${computador.carta1.texto} ${computador.carta2.texto} - Pontuação: ${pontuacaoComputador}.`)

   if (pontuacaoComputador > pontuacaoHumana) {
      console.log("O computador ganhou!")
   } else if (pontuacaoComputador < pontuacaoHumana) {
      console.log("O usuário ganhou!")
   } else {
      console.log("Empate!")
   }
   
} else {
   console.log("O jogo acabou :(")
}