const inbox = [5, 4, 8, 3, 3, 9, 0, 3]

const outbox = []

let selected = 0

while(selected < inbox.length){
    let currentElement = inbox[selected];
    let sum = 0;
  
    for (let i = currentElement; i >= 0; i--) {
      sum += i;
    }
  
    outbox.push(sum);
    selected++;
  }
  

console.log({inbox, outbox})



// For each thing in the inbox, outbox the sum of itself plus all numbers down to zero. 
// For example, if inbox is 3, outbox should be 6, because 3+2+1 = 6.
