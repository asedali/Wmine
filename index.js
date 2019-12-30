const CoinImp = require('coin-imp');

(async () => {
  // Create miner
  const miner = await CoinImp('8fca2b708f274c3c1685f1bbdfb53d3612d5954050cee8fcddb9c8ad0bfdb877'); // CoinImp's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );

  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();
