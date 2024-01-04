const inbox = [5, 4, 8, 3, 3, 9, 0, 3]

const outbox = []

let selected = 0

while (selected < inbox.length){
    const n1 = inbox[selected];
    const n2 = inbox[selected + 1];
  
    const resultado = n1 / n2 | 0;
    outbox.push(resultado);
  
    selected = selected + 1;
  }

console.log({inbox, outbox})

//OBJETIVO
//para cada dois elementos da entrada, quantas vezes o segundo cabe no primeiro?
//nao se preocupe com números negativos, divisões por zero ou restos.
