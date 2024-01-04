const inbox = [9, 11, 2, 0, 16, 13, 7, 2, 0, 4, 93, 6, 52, 44, 0]

const outbox = []

let selected = 0

while(selected < inbox.length){
    let currentNumber = inbox[selected];
    let smallestNumber = Number.MAX_SAFE_INTEGER;
  
    while (currentNumber !== 0) {
      if (currentNumber < smallestNumber) {
        smallestNumber = currentNumber;
      }
  
      selected++;
  
      currentNumber = inbox[selected];
    }
  
    outbox.push(smallestNumber);
  
    selected++;
}

console.log({inbox, outbox})

// OBJETIVO
// for each zero terminated string in the inbox, 
// send to the outbox only the smallest number youve seen in that string. 
// You will never be given an empty string. Reset and repeat for each string.
