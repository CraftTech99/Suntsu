const Discord = require('discord.js');
const prefix = process.env.BOT_PREFIX
const client = new Discord.Client();

client.on('ready', () => {
console.log('I am ready!');
});
client.on('ready', () => {
        client.user.setGame('Do great! Feel Great!');
    });
client.on("message", (message) => {
  
  if (message.content.startsWith(`${prefix}help`)) {
    message.channel.send("```Type the following commands with no uppercase letters:``````/owner, /facstaff, /facmembers, /invite```");
  }

  if (message.content.startsWith(`${prefix}owner`)) {
    message.channel.send("```The Honorable Owner of the Faction Suntsu is`````` Wendiya```");
  }
  if (message.content.startsWith(`${prefix}facstaff`)) {  
    message.channel.send("```The Respected staff members of Suntsu are:`````` wendiya, mackaylee, Razztee, BigDaddy2003, EmpereurNr2, HuskyBadger843 aka Vishnu19```"); 
  }
   if (message.content.startsWith(`${prefix}facmembers`)) {
    message.channel.send("```Members of Suntsu are:`````` Chaos_Knight, Jarcle, DokanBoy, fanjaki, hellbound, kermitzafrog, Lean123shen, Nekta, Neplosion, Phantom Hyperion, rudra30, samantha, Yaboku, ShadowFreddy, Sicogina, Tazky, Twitch_manobeast10, Viebe2, Vikram, VINHei, ZKillUchiha1, WoodieTree, Freepurplehaze```");
  }
  if (message.content.startsWith(`${prefix}invite`)) {
    message.channel.send("https://discord.gg/5T58THC");
  }
});

client.login(process.env.BOT_TOKEN);
