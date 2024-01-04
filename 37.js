const inbox = [23, 0]

const outbox = []                  ?

let selected = 0

let floor = ['E' ,13 ,'' ,'C' ,23 ,'' ,'' ,'' ,'' ,'' ,'P' ,20 ,'' ,'S' ,3 ,'' ,'' ,'' ,'' ,'' ,'E' ,-1 ,'' ,'A' ,10]

while (selected < inbox.length) {
    let currentAddress = inbox[selected];

    // Traverse the chain until a negative address is encountered
    while (currentAddress >= 0) {
        // Find the index of the current address in the floor
        const currentIndex = floor.indexOf(currentAddress);

        // If the address is found, add the corresponding data to the outbox
        if (currentIndex !== -1) {
            const currentData = floor[currentIndex - 1];
            outbox.push(currentData);
        }

        // Move to the next address in the chain
        currentAddress = floor[currentIndex + 1];
    }

    selected++;
}

console.log({inbox, outbox})

// Each pair on the floor contains: data and the address of another one of the pairs.
// a scrambled chain. each thing in the inbox is and address of one of the pairs. outbox
// the data for that pair, and also the data in all following pairs in the chain.
// The chain ends when you reach a negative address. repeat until the inbox is empty.
