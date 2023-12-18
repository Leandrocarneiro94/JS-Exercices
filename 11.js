const inbox = [3, 9, 8, 3, -7, -7, 7, -4]

const outbox = []

let n1 = 0

let n2 = 1

while(n1 < inbox.length){
    outbox.push(inbox[n2] - inbox[n1])
    outbox.push(inbox[n1] - inbox[n2])    
    n1 = n1 + 2
    n2 = n2 + 2
}

console.log({inbox, outbox, n1, n2})



// OBJETIVO:
// Para cada dois elementos da entrada, 
// primeiro subtraia o 1º do 2º e leve o resultado a saida. 
// Em seugida, subtraia o 2º do 1º e leve nomanet eo resultado a saída. ]
// Repita.
