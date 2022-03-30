```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  p1 += p1
  p2 += p2 + p2 
  
  let average = (p1 + p2 + ex) / 6
  
  if(average >= 9) {
    return "A"
  } else if(average < 9 && average >= 7.5){
    return "B"
  } else if(average < 7.5 && average >= 6){
    return "C"
  } else {
    return "D"
  }
}
```