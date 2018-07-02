const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('I am ready!');
});

client.on('message', message => {
if (message.content.startsWith("/help")) {
  message.channel.send("Type: /owner, /fac staff, /fac members");
} 
  if (message.content.startsWith("/owner")) {
    message.channel.send("The Honorable Owner of the Faction Suntsu is Wendiya"); 
  }
  if (message.content.startwith("/fac staff")) {
    message.channel.send("The Respected staff members of Suntsu are: wendiya, mackaylee, Razztee, BigDaddy2003, EmpereurNr2, HuskyBadger843 aka Vishnu19")
  }
  is (message.content.startwith("/fac members")) {
    message.channel.send("Members of Suntsu are: Chaos_Knight, coelprit, DokenBoy, fanjaki, hellbound, kermitzafrog, Lean123shen, Nekta, Neplosion, Phantom Hyperion, rudra30, samantha, sansfoyer, ShadowFreddy, Sicogina, Tazky, Twitch_manobeast10, Viebe2, Vikram, VINHei, ZKillUchiha1);
         }

});

client.login(process.env.BOT_TOKEN);
