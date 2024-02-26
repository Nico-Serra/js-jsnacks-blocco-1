console.log('hello world');

/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. @qui
*/

let odd = []

// for (let i = 0; i < 6; i++) {
//     let element = Number(prompt('Inserisci un numero'))

//     if (element % 2 === 1) {
//         odd.push(element)
//     }
    
// }

let i = 0
while ( i < 6) {
    let element = Number(prompt('Inserisci un numero'))
    if (element % 2 === 1) {
           odd.push(element)
         }
     i++     
}


console.log(odd);



