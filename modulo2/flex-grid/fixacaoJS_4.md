```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  let quantidade = 0
  
  for(let i = 0; i < arrayDeNumeros.length; i++ ){
    
    if(arrayDeNumeros[i] === numeroEscolhido){
      quantidade++
    }
  }
  
  if (quantidade > 0) {
    return `O número ${numeroEscolhido} aparece ${quantidade}x`
  } else {
    return "Número não encontrado"
  }
   
}
```