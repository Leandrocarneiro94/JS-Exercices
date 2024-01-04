const inbox = ['F', 'O', 'O', 'T', 0, 'Y', 'O', 'U', 0, 'A', 'L', 'I', 'V', 'E', 0]

const outbox = []

let selected = 0;

while (selected < inbox.length) {
    let currentString = [];
    
    while (selected < inbox.length && inbox[selected] !== 0) {
        currentString.push(inbox[selected]);
        selected++;
    }

    outbox.push(...currentString.reverse());

    if (selected < inbox.length && inbox[selected] === 0) {
        outbox.push(0);
        selected++;
    }
}

console.log({ inbox, outbox });

// for each zero terminated string in the inbox,
// reverse it and put the result in the outbox. Repeat.
