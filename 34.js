const inbox = ['B' ,'O' ,'Y' ,'O' ,'I' ,'L' ,'L' ,'O' ,'G' ,'I' ,'C']

const outbox = []

let selected = 0

let vogais = ['A' ,'E' ,'I' ,'O' ,'U']

while (selected < inbox.length) {
    const eliminadordevogal = inbox[selected];

    if (!vogais.includes(eliminadordevogal)) {
        outbox.push(eliminadordevogal);
    }

    selected++;
}

console.log({inbox, outbox})

// send everything from the inbox to the outbox, except for vowels.
