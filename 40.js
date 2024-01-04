const inbox = [2, 2, 18]

const outbox = []

let selected = 0

while (selected < inbox.length) {
    const selecionado = inbox[selected];

    function fatorador(num) {
        const factors = [];
        for (let i = 2; i <= num; i++) {
            while (num % i === 0) {
                factors.push(i);
                num /= i;
            }
        }
        return factors;
    }

    const currentFactors = fatorador(selecionado);

    outbox.push(...currentFactors);

    selected++;
}

console.log({ inbox, outbox });

// for each thing in the inbox, send its PRIME FACTORTS to the outbox 
// in order from smallest to largest.
