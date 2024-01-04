const inbox = [2, 9]

const outbox = []

let selected = 0

let floor = [[0, 1, 2, 3],[0, 1, 2, 3]]

while (selected < inbox.length) {
    const currentAddress = inbox[selected];

    function findCoordinates(address) {
        const columns = floor[0].length;
        const row = Math.floor(address / columns);
        const col = address % columns;
        return [col, row];
    }

    const currentCoordinates = findCoordinates(currentAddress);

    outbox.push(...currentCoordinates);

    selected++;
}

console.log({ inbox, outbox });

// each number in the inbox is and address of a tile on the floor.
// send to the outbox the coordinates of that tile, column first, row second.
// for example, an address of 6 has coordinates 2, 1.
