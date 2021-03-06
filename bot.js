const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
 console.log('SRMbot is Online');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
      if(command === 'help'){
        message.channel.send('-classkey = To know Keycodes For subjects\n -(subject keycode) = To Get the Link to join\n This Bot is still in development.')
    } else if(command === 'classkey'){
        message.channel.send('Aptitude = apti\nSignals and Systems = sigsys\n Electromagnetics and Transmission Lines = emtl\nElectronic Devices = ed\nDigital Electronics = digiep\nEVS = evs\nControl Systems = ctrlsys\nSocial Engineering = soceng\nMaths = math')
    } else if(command === 'apti'){
        message.channel.send('https://meet.google.com/lookup/h4y6aqdoix');
    } else if (command === 'sigsys'){
        message.channel.send('https://meet.google.com/lookup/fndyaqokal');
    } else if (command === 'emtl'){
        message.channel.send('https://meet.google.com/lookup/hj5h67fpc6');
    } else if (command === 'ed'){
        message.channel.send('https://meet.google.com/lookup/duwip7u3gh');
    } else if (command === 'digiep'){
        message.channel.send('https://meet.google.com/lookup/d2zod2dbmk');
    } else if (command === 'evs'){
        message.channel.send('https://meet.google.com/lookup/f63azng5m4');
    } else if (command === 'ctrlsys'){
        message.channel.send('https://meet.google.com/lookup/a35fxvaxox');
    } else if (command === 'soceng'){
        message.channel.send('https://meet.google.com/lookup/dscrvh4nqa');
    } else if (command === 'math'){
        message.channel.send('https://meet.google.com/lookup/gp2rfvgsmt');
    }
});

client.login(process.env.token);
