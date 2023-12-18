const inbox = [6, -4, 5, 0]

const outbox = []

let selected = 0

while(selected < inbox.length){
    outbox.push(inbox[selected] * 40)

    selected = selected + 1
}

console.log({inbox, outbox})



// OBJETIVO:
// Multiplique cada elemento da entrada por 40 e leve a saída.
//
