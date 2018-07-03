const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('I am ready!');
});

client.on("message", (message) => {
  
  if (message.content.startsWith("shelp")) {
    message.channel.send("```Type the following commands with no uppercase letters:```sowner, sfacstaff, sfacmembers, sinvite");
  }

  if (message.content.startsWith("sowner")) {
    message.channel.send("The Honorable Owner of the Faction Suntsu is Wendiya");
  }
  if (message.content.startsWith("sfacstaff")) {  
    message.channel.send("The Respected staff members of Suntsu are: wendiya, mackaylee, Razztee, BigDaddy2003, EmpereurNr2, HuskyBadger843 aka Vishnu19"); 
  }
   if (message.content.startsWith("sfacmembers")) {
    message.channel.send("Members of Suntsu are: Chaos_Knight, coelprit, DokenBoy, fanjaki, hellbound, kermitzafrog, Lean123shen, Nekta, Neplosion, Phantom Hyperion, rudra30, samantha, sansfoyer, ShadowFreddy, Sicogina, Tazky, Twitch_manobeast10, Viebe2, Vikram, VINHei, ZKillUchiha1");
  }
  if (message.content.startsWith("sinvite")) {
    message.channel.send("https://discord.gg/5T58THC");
  }
});

client.login(process.env.BOT_TOKEN);
