const inbox = [3, -3, 0]

const outbox = []

let selected = 0

let i = selected

while (selected < inbox.length) {
    const currentNumber = inbox[selected];
    
    outbox.push(currentNumber);
    
    if (currentNumber > 0) {
      for (let i = currentNumber - 1; i >= 0; i--) {
        outbox.push(i);
      }
    }
}

console.log({inbox, outbox})



// OBJETIVO:
// Leve cada numero da entrada a saida seguido de todos os 
// numeros menores ate zero.
