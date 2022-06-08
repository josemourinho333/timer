const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.on('keypress', (b) => {
  if (b === 'b') {
  process.stdout.write('\x07');
  }
});

rl.question('Enter when the alarm will go off in seconds: ', (timer) => {
  if (timer < 9 || timer === Number(timer)) {
    let countDown = timer;
    let i = 1;
    const interval = setInterval(() => {
      console.log(`${countDown--}`);
      i++;
  
      if (i > timer) {
        clearInterval(interval);
        process.stdout.write('\x07');
        console.log('thanks for using me, ciao!');
        rl.close();
      }
    }, 1000);
  } else {
    console.log('Enter a number between 1 - 9, try again');
    rl.close();
  }
});
