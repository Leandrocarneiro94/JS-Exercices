const inbox = [7, 0, 5, 'f', 0, 0, 6, 0]

const outbox = []

let i = 0

while(i < inbox.length){
    if (inbox[i] === 0){
        outbox.push(inbox[i])
    }

    i = i + 1
}

console.log({i, inbox, outbox})



// OBJETIVO:
// Envie apenas os zeros para a saída.
