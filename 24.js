const inbox = [7, 3, 5, 2, 2, 5, 0, 4]

const outbox = []

let selected = 0

while (selected < inbox.length - 1) {
    const primeiroElemento = inbox[selected];
    const segundoElemento = inbox[selected + 1];
  
    const restoDivisao = primeiroElemento % segundoElemento;
  
    outbox.push(restoDivisao);
  
    selected = selected + 2;
  }

console.log({inbox, outbox})


// OBJETIVO:
// Para cada dois elementos da entrada, leve a saida o resto do resultado da divisao entre o primeiro e o segundo.
// nao se preocupe, nao é necessario dividir de verdade, tambem nao se preocupe com os numeros negativos por enquanto.
