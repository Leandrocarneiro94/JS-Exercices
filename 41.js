const inbox = [73, 34, 43, 0, 'A', 'W', 'A', 'K', 'E', 0]

const outbox = []

let selected = 0

while (selected < inbox.length) {
    let currentNumber = inbox[selected]
    let beginning = 0

    if (currentNumber === 0){
        const sequence = inbox.slice(beginning, selected)
        const order = sequence.sort()
        outbox.push(...order)
        beginning = selected + 1
    }

    selected++
}

console.log({ inbox, outbox });

// for each zero terminated string in the inbox, sort the contents of the string, 
// smallest first, biggest last, and put the results in the outbox. 
// Repeat for each string.
