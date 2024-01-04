const inbox = [10, 21]

const outbox = []

let selected = 0

let n1 = 1

let n2 = 1

let op = 1

while(selected < inbox.length){
    while (op <= inbox[selected]){
        if(n2 === 1){
            outbox.push(n2)
        }
        outbox.push(op)
        op = n1 + n2
        n1 = n2
        n2 = op
    } 

    n1 = 1

    n2 = 1

    op = 1

    selected = selected + 1
}

console.log({inbox, outbox})



// OBJETIVO:
// Para cada elemento da entrada, leve a saida a sequencia
// de Fibonacci completa, mas sem ultrapassar seu valor.
// EX. se elemento da entrada é 10, levar a saida:
// 1, 1, 2, 3, 5, 8.

// opções de codigo:
// selected = selected + 1
// selected += 1
// selected++ (caso seja 1)
