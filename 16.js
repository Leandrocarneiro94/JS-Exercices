const inbox = [5, -6, 7, 0, -3, -4, 9]

const outbox = []

let selected = 0

while(selected < inbox.length){
    if (inbox[selected] < 0){
        outbox.push(inbox[selected] * -1) 
    }
    else {
        outbox.push(inbox[selected])
    }
    selected = selected + 1
}

console.log({inbox, outbox})



// OBJETIVO:
// Leve cada elemento da entrada à saída, porem, se um numero
// for negativo, remova o sinal negativo.
