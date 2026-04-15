const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Resenha1522.aternos.me', // without port (ex: play.aternos.me)
  port: 40989, // Default Minecraft port
  username: 'BOTFDP' // Bot username
});

bot.on('spawn', () => {
  console.log('Bot has spawned and is now AFK!');
  // Simple AFK movement loop
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);
  }, 10000); // Every 10 sec jump
});

bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot disconnected'));
