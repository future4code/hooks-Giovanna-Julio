```

function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let conta
  if (quantidade<12) {
    conta = quantidade * 1.30
  } else if (quantidade >= 12) {
    conta = quantidade * 1.00
  } else {
    return "erro"
  }
  
  return conta
}

```