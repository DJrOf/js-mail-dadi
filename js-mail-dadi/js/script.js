console.log('JS OK')

const emails = ['titius@spqrmail.rm', 'caius@spqrmail.rm', 'sempronius@spqrmail.rm'];
console.log(emails);

const userEmail = parseInt(prompt('Inserisci la tua e-mail'));
console.log(emails[userEmail]);

if (console.log(emails[userEmail]) === undefined) {
    console.log('E-mail invalida')
    }
    else {
        console.log('E-mail verificata')
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const userNumber = getRandomInt(7);
  console.log(userNumber)

  const cpuNumber = getRandomInt(7);
  console.log(cpuNumber)

if( userNumber > cpuNumber) {
    console.log('Hai vinto');
} 
else {
    console.log('Hai perso');
}

