const inbox = [5, -7, 3, 0]

const outbox = []

let selected = 0

while(selected < inbox.length){
    outbox.push(inbox[selected] * 3)
    selected = selected + 1
}

console.log({selected, inbox, outbox})



// OBJETIVO:
// Triplique cada elemento da entrada e leve a saída
//
