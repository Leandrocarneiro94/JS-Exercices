const inbox = ['U' ,'N' ,'Z' ,'I' ,'O' ,0 ,'U' ,'N' ,'I' ,'T' ,0]

const outbox = []

let selected = 0

let selectedWord = [];

let isAlphaSorted = true;

while (selected < inbox.length) {
    const selecionado = inbox[selected];

    if (selecionado !== 0) {
        selectedWord.push(selecionado);
    } else {
        const selectedWordString = selectedWord.join('');
        
        if (isAlphaSorted || selectedWordString < outbox[0]) {
            outbox.length = 0;
            outbox.push(selectedWordString);
            isAlphaSorted = false;
        }

        selectedWord = [];
    }

    selected++;
}

console.log({inbox, outbox})

// the inbox contains exactly two words. determine which word comes first, if you were
// to order them alphabetically, and send only that word to the outbox.
