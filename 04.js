const inbox = [4, 5, 'D', 'S', 2, 5]

const outbox = []

let acc = 0

while(acc < inbox.length){
    outbox[acc] = inbox[acc + 1]
    outbox[acc + 1] = inbox[acc]
    acc = acc + 2
}

console.log({acc, inbox, outbox})



// OBJETIVO:
// pegar os dois primeiros elementos da entrada e levalos a 
// saída em ordem inversa. Repetir ate estar vazia
