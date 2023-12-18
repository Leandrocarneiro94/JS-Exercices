const inbox = [9, -4, 9, 4, 9, -2, -9, -5]

const outbox = []

let selected = 0

while(selected < inbox.length){
    if(inbox[selected] >= 0 && inbox[selected + 1] >= 0){
        outbox.push(0)
    }
    else if (inbox[selected] < 0 && inbox[selected + 1] < 0){
        outbox.push(0)
    }
    else {
        outbox.push(1)
    }
    selected = selected + 2
}

console.log({inbox, outbox})



// OBJETIVO:
// Para cada dois elementos da entrada, 
// leve um 0 a saida se tiverem sinais iguais. 
// (ambos positivos ou negativos)
// Leve um 1 a saída se tiverem sinais diferentes.
// repita ate que a entrada esteja vazia
