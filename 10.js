const inbox = [6, -1, 6, 0]

const outbox = []

let selected = 0

while(selected < inbox.length){
    outbox.push(inbox[selected] * 8)
    selected = selected + 1
}

console.log({selected, inbox, outbox})



// OBJETIVO:
// Multiplique cada elemento da entrada por 8 e leve a saída.
//

