const inp = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

// function openOrSenior(data){
//   novoValor = data.map(valor => 
//     (valor[0] >= 55 && valor[1] >= 7 ? 'Senior' : 'Open' )
//   )
//   return novoValor
// }

/*

  Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

*/

function openOrSenior(data){
  novoValor = data.map(([idade, nivel]) => 
    (idade >= 55 && nivel >= 7 ? 'Senior' : 'Open' )
  )
  return novoValor
}