const inbox = [2, 2, 1, 5, 6]

const outbox = []

let selected = 0

const tiles = ['n', 'k', 'a', 'e', 'r', 'd', 'o', 'l', 'y', 'j']

while(selected < inbox.length){
    const address = inbox[selected];
    const letter = tiles[address];
    outbox.push(letter);
    selected++;
}

console.log({inbox, outbox})

// Imagine each thing in the INBOX is an address. And each address refers to a tile 0-9 on the floor. 
// Your task: For each address in the INBOX, pick up the letter at that address and OUTBOX it.

