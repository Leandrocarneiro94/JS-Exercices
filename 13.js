const inbox = [5, 2, 4, 4, -3, 2, 8, 8]

const outbox = []

let selected = 0

while(selected < inbox.length){
    if(inbox[selected] === inbox[selected + 1]){
        outbox.push(inbox[selected])
    }
    selected = selected+2
}

console.log({inbox, outbox})



// OBJETIVO:
// Pegue dois elementos da entrada. Se forem Iguais, leve apenas
// um deles a saída. Descarte pares diferentes. Repita
