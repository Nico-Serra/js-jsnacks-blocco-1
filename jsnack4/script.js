console.log('Hello world');

/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
*/

const partecipants = [
    'Luca', 'Fabio' , 'Giovanni' , 'Carmine' , 'Mattia' , 'Nicola'
]

console.log(partecipants);

let access = false

console.log(access);

const userName = prompt('Scrivi qui il tuo nome')

console.log(userName);

for (let i = 0; i < partecipants.length; i++) {
    const partecipant = partecipants[i];
    console.log(partecipant);

    if (userName === partecipant) {
        console.log('Benvenuto al party');
        access = true

        break
    }
    
}

if (access === true) {
    console.log('Benvenuto al party');
    
}else {
    console.log('Non puoi entrare');
}



