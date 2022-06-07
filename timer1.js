const alarmsInSec = process.argv.slice(2).filter( value => value > 0 || typeof value === 'number');

const timer = (alarmsInSec) => {

  if (alarmsInSec.length < 1) {
    return console.log('No valid timers set');
  }

  for (const times of alarmsInSec) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Your alarm for ${(times * 1000)}`);
    }, times)
  }
};

timer(alarmsInSec);