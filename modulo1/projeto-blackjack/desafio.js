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
       let humano = {
          carta1 : comprarCarta(),
          carta2 : comprarCarta()
       }
       
       while ((humano.carta1.valor == 13)&&(humano.carta2.valor == 13)){
          humano.carta1 = comprarCarta()
          humano.carta2 = comprarCarta()
       }

       let computador = {
          carta1 : comprarCarta(),
          carta2 : comprarCarta() 
       }

       while ((computador.carta1.valor == 13)&&(computador.carta2.valor == 13)){
         computador.carta1 = comprarCarta()
         computador.carta2 = comprarCarta()
      }
    
       let pontuacaoHumana = humano.carta1.valor + humano.carta2.valor
       let pontuacaoComputador = computador.carta1.valor + computador.carta2.valor
    
       console.log(`Usuário -> Cartas: ${humano.carta1.texto} ${humano.carta2.texto} - Pontuação: ${pontuacaoHumana}.`)
       console.log(`Computador -> Cartas: ${computador.carta1.texto} - Pontuação: ${computador.carta1.valor}.`)
    
      if (confirm(`Suas cartas são ${humano.carta1.texto} e ${humano.carta2.texto}. A carta revelada do computador é ${computador.carta1.texto}.`+ 
      "\n" +
      "Deseja comprar mais uma carta?")) {
         
         humano["carta3"] = comprarCarta ()
         
         pontuacaoHumana = humano.carta1.valor + humano.carta2.valor + humano.carta3.valor 
         
         console.log(`Usuário -> Cartas: ${humano.carta1.texto} ${humano.carta2.texto} ${humano.carta3.texto} - Pontuação: ${pontuacaoHumana}.`)
         console.log(`Computador -> Cartas: ${computador.carta1.texto} - Pontuação: ${computador.carta1.valor}.`)
      
         if (confirm(`Suas cartas são ${humano.carta1.texto} ${humano.carta2.texto} ${humano.carta3.texto}. A carta revelada do computador é ${computador.carta1.texto}.`+ 
         "\n" +
         "Deseja comprar mais uma carta?")) {
            humano["carta4"] = comprarCarta ()
            pontuacaoHumana = humano.carta1.valor + humano.carta2.valor + humano.carta3.valor + humano.carta4.valor

            console.log(`Usuário -> Cartas: ${humano.carta1.texto} ${humano.carta2.texto} ${humano.carta3.texto} ${humano.carta4.texto} - Pontuação: ${pontuacaoHumana}.`)
            console.log(`Computador -> Cartas: ${computador.carta1.texto} ${computador.carta2.texto} - Pontuação: ${pontuacaoComputador}.`)
            console.log("Aguarde...")

         } else{
            console.log(`Usuário -> Cartas: ${humano.carta1.texto} ${humano.carta2.texto} ${humano.carta3.texto} - Pontuação: ${pontuacaoHumana}.`)
            console.log(`Computador -> Cartas: ${computador.carta1.texto} ${computador.carta2.texto} - Pontuação: ${pontuacaoComputador}.`)
            console.log("Aguarde...")
      }

      
      } else{
         console.log("Aguarde...")
      }

      

       if ((pontuacaoHumana>21)&&(pontuacaoComputador<21)) {
          console.log("O computador ganhou!")
       } else if ((pontuacaoComputador>21) && pontuacaoHumana<21) {
          console.log("O usuário ganhou!")
       } else {
          console.log("Empate!")
       }
       
    } else {
       console.log("O jogo acabou :(")
    }