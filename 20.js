const inbox = [3, 2, 0, 8]

const outbox = []

let selected = 0

while(selected < inbox.length){
    const tripler = inbox[selected] * inbox[selected + 1]
    outbox.push(tripler)
    
    selected = selected + 2
}

console.log({inbox, outbox})



// OBJETIVO:
// Para cada dois elementos da entrada, multiplique-os e 
// leve o resultado à saída. Não se preocupe com numeros
// negativos por enquanto.
