console.log('hello world');

/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

let sum = 0

let number = prompt('inserisci qui un numero di 4 cifre')

//console.log(number);

for (let i = 0; i < number.length; i++) {
    let element = number[i]
    console.log(element);
    element = Number(element)
    sum += element
    
    
}

console.log(sum);