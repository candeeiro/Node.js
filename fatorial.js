const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

readline.question(`Informe um número inteiro entre 0 e 100: `, n => {
    console.log(fatorial(n));
    //console.log(`Hi ${name}!`);
    readline.close();
  });
function fatorial(n) {
    
    return n === 0 || n === 1 ? 1 : n * fatorial(n - 1);
  }

