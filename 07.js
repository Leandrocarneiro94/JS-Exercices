const inbox = [4, 0, 7, 'B', 0, 0, 2, 0]

const outbox = []

let i = 0

while(i < inbox.length){
    if (inbox[i] !== 0){
        outbox.push(inbox[i])
    }
    
    i = i + 1
}

console.log({i, inbox, outbox})



// OBJETIVO:
// Envie todos os elementos, Exceto os zeros, para a saída.
//
