console.log('hello world');

/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const firstWord = prompt('Scrivi una parola')

const secondWord = prompt('Scrivi una parola')

console.log(firstWord.length, secondWord.length);

if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord );
    
} else if (secondWord.length > firstWord.length ) {
    console.log(firstWord, secondWord );
} else {
    console.log('le parole hanno la stessa lunghezza');
}