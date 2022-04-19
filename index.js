import shopListHawker from './scripts/shopListHawker.js';

var times = 0;
setInterval(() => {
  // random hawker to prevent spam
  const randomNumber = Math.random() * 10;
  if (randomNumber > 5) {
    shopListHawker().then(() => {
      times += 1;
      console.log(`${times} times at ${new Date().toLocaleString()}`);
    });
  }
}, 60000);
