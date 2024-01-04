const inbox = ['A' ,'A' ,'B' ,'D' ,'A' ,'A' ,'C' ,'C' ,'A' ,'C']

const outbox = []

let selected = 0

const listaIguais = new Set();

while (selected < inbox.length) {
    const selecionado = inbox[selected];

    if (!listaIguais.has(selecionado)) {
        outbox.push(selecionado);
        listaIguais.add(selecionado);
    }

    selected++;
}

console.log({inbox, outbox})

// send everything from the inbox to the outbox, unless you've seen the same value before.
// discard any duplicates.
