const inbox = [23, 0]

const outbox = []

let selected = 0

let floor = ['E' ,13 ,'' ,'C' ,23 ,'' ,'' ,'' ,'' ,'' ,'P' ,20 ,'' ,'S' ,3 ,'' ,'' ,'' ,'' ,'' ,'E' ,-1 ,'' ,'A' ,10]

while (selected < inbox.length) {
    let currentAddress = inbox[selected];

    while (currentAddress >= 0) {
        const currentIndex = floor.indexOf(currentAddress);

        if (currentIndex !== -1) {
            const currentData = floor[currentIndex - 1];
            outbox.push(currentData);
        }

        currentAddress = floor[currentIndex + 1];
    }

    selected++;
}

console.log({inbox, outbox})

// Each pair on the floor contains: data and the address of another one of the pairs.
// a scrambled chain. each thing in the inbox is and address of one of the pairs. outbox
// the data for that pair, and also the data in all following pairs in the chain.
// The chain ends when you reach a negative address. repeat until the inbox is empty.
