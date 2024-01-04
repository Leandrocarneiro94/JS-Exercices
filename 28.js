const inbox = [5, 4, 8, 3, 10, 1, 3, 9, 2, 0, 3, 15]

const outbox = []

let selected = 0

while (selected < inbox.length){
    // pega 3 elementos do array utilizando method slice
    const grupo = inbox.slice(selected, selected + 3);
  
    // organiza em ordem crescente utilizando sort
    const organized = grupo.sort((a, b) => a - b);
  
    outbox.push(...organized);
  
    selected = selected + 3;
  }

console.log({inbox, outbox})

// For each THREE THINGS in the INBOX, send them to the OUTBOX in order from smallest to largest.
