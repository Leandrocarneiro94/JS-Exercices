const inbox = ['A', 'X', 'B', 'C',]

const outbox = []

const floor = ['B', 'A', 'X', 'B', 'C', 'X', 'A', 'B', 'A', 'X', 'C', 'B', 'A', 'B', 0]

let selected = 0;

while (selected < inbox.length) {
    const selecionado = inbox[selected];
    const iguais = floor.filter(item => item === selecionado).length;

    outbox.push(iguais);

    selected++;
}

console.log({inbox, outbox})

// for each thing in the inbox, send to the outbox the total
// number of matching items on the Floor
