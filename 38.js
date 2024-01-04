const inbox = [751, 427, 6, 37];

const outbox = [];

let selected = 0;

while (selected < inbox.length) {
    const selecionado = inbox[selected];

    const digits = String(selecionado).split('').map(Number);

    outbox.push(...digits);

    selected++;
}

console.log({ inbox, outbox });

// grab each number from the inbox, and sen its digits to the outbox.
// For example, 123 becomes 1, 2, 3.
