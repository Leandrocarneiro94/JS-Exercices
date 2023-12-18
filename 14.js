const inbox = [1, 8, -7, -9, 9, 9,, 6, 1]

const outbox = []

let selected = 0

while(selected < inbox.length){
    if(inbox[selected ] >= inbox[selected  + 1]){
        outbox.push(inbox[selected ])
    }
    else {
        outbox.push(inbox[selected  + 1])
    }
    selected = selected + 2
}

console.log({inbox, outbox})



// OBJETIVO:
// Pegue dois elementos da entrada, leve a saida apenas o maior
// dos dois. Se eles forem iguais, envie qualquer.
