require('colors');
const fs = require('fs');
const { processQuests } = require('./src/quests');

const accounts = JSON.parse(fs.readFileSync('accounts.json', 'utf-8'));

(async () => {
  process.stdout.write('\x1Bc');
  console.log('========================================='.cyan);
  console.log('=           Auto Claim Quest            ='.cyan);
  console.log('=         Welcome to WibuCrypto         ='.cyan);
  console.log('=      https://t.me/wibuairdrop142      ='.cyan);
  console.log('========================================='.cyan);
  console.log();
  try {
    for (const bearerToken of accounts) {
      await processQuests(bearerToken);
    }
  } catch (error) {
    console.error('Error in IIFE: ' + error);
  }
})();
