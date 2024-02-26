console.log('hello world');

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// for (let i = 0; i < 10; i++) {
//     let element =Number(prompt('Inserisci un numero'))
//     console.log(element);

//     let sum = element + element
//     console.log(som);
// }

let i = 0
while (i < 10) {
    let element =Number(prompt('Inserisci un numero'))
    console.log(element);
    
    let sum = 0 + element
    console.log(sum);
    i++
}
