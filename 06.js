const inbox = [2, 3, 9, 4, -8, 4, 8, -2]

const outbox = []

let i = 0

while(i < inbox.length){
    outbox.push(inbox[i] + inbox[i + 1])
    i = i + 2
}

console.log({inbox, outbox})



// OBJETIVO:
// Para cada dois elementos da entrada, some-os e enevie o 
// resultado a saída.
