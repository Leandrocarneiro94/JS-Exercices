const inbox = [5, 5, 0, 0, 5, 0]

const outbox = []

let selected = 0

let soma = 0

while(selected < inbox.length){
    if (inbox[selected] !== 0){    
       soma = soma + inbox[selected]
    } else{
        outbox.push(soma)
        soma = 0
    }
    selected = selected + 1
}

console.log({inbox, outbox})



// OBJETIVO:
// Soma terminada em zero. some todos os numeros de uma sequencia. quando voce chegar no final 
// (marcado por um zero) leve a soma a saída, repita para cada sequencia

// (alternativa de codigo linha 12) soma += inbox[selected]

// Fluxo:
// checar if selected !== 0
// caso seja: somar com o proximo !== 0
// caso seja 0 = outbox.push[soma]


