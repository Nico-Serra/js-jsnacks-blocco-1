console.log('hello world');

/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

let number1 = Number(prompt('Inserisci qui un numero'));

let number2 = Number(prompt('Inserisci qui un numero'));

if (number1 > number2) {
    console.log('Number 1 is major');
} else if (number2 > number1) {
    console.log('Number 2 is major');
}