const discord = require(`discord.js`);
const { filterFormats } = require('ytdl-core');
const bot = new discord.Client();

//const google = require(`googleapis`);
//const youtube = google.Auth.LoginTicket({version: `v3`, auth: `AIzaSyDY4LwGcIIE34WOW_J4ppuy6fXWKg9dwDo`})

const ytdl = require(`ytdl-core`)
//const youtube = require("youtube-search")

const config = require('./config.json');
const search = require('youtube-search');
var opts = {
    maxResults: 10,
    key: 'AIzaSyDY4LwGcIIE34WOW_J4ppuy6fXWKg9dwDo'
  };


  
bot.on('ready', () =>{
    console.log('dziala');
    bot.user.setPresence({
        activity: { type: "WATCHING", name:"Upgrade bota"},
        status: "online"
    })
    
})

bot.on("guildMemberAdd", newbie => {
    newbie.user.send("Witaj na serwerze klanu Aeternum Vivt! zapoznaj się z regulaminem i daj znać do kogoś z rangą Boss lub Rekruter ;) ")
})

bot.on('message', async msg=>{

    

    if(msg.content === "Solo flawless"){
        msg.channel.send("Mountaintopik, Gilotynka, Solo flawless")
    }
    if(msg.content=== "Hello there"){
        msg.channel.send("General Kenobi!")
    }
    if(msg.content=== ".help"){
        msg.channel.send("Spieprzaj Głuptak")
    }
    if(msg.content.startsWith("Witaj") ){
        if (msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join();
            const dispatcher = connection.play(`./Witaj.mp3`);
            
        }
        msg.channel.send("Dzielny strażniku!")
    }

    if (!msg.content.startsWith(config.prefix)) return;
    const arg = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = arg.shift().toLowerCase();

    switch(cmd){
        
            //---------------------------------Poradniki------------------------------//
        case 'ping':
            msg.channel.send('pong!');
            break;

        case 'fb':
            msg.channel.send('Znajdź nas na Facebooku:');
            msg.channel.send('https://www.facebook.com/aeternumvivit');
            break;
        
        case 'raid':
            
            if(arg[0]==='lw'){
                    msg.channel.send('Zgromadzone materiały z Last Wisha')
                    msg.channel.send('https://drive.google.com/drive/folders/1woyUMkjyH1RUzqQsIeNFkydDOVmszeez');
                    break;
            }
            if(arg[0]==='lev'){
                    msg.channel.send('Zgromadzone materiały z Leviathana')
                    msg.channel.send('https://drive.google.com/drive/folders/19uU3c8PERO77cgZSxFgoywF0dgkAErFN');
                    break;
            }
            if(arg[0]==='sotp'){
                    msg.channel.send('Zgromadzone materiały z Bicza Przeszłości')
                    msg.channel.send('https://drive.google.com/drive/folders/1K5aW9ezsaCWwUTr4QvElsWd-jcIletra');
                    break;               
            }
            else{
                    msg.channel.send('Zgromadzone materiały pomocnicze')
                    msg.channel.send('https://drive.google.com/drive/folders/10K2Npc4VfUpFohAGcZtTZ89JQJnNTHpF');
                    break;  
            }
            //------------------------Poradniki-----------------------------//
            //------------------------Role-----------------------------------//
        case 'inclan':
            if(!msg.member.hasPermission("MANAGE_ROLES")){
                msg.channel.send("Nie masz uprawnień do tej komendy");
                return;
            }
            else{
                if(!arg[0]){
                    msg.channel.send("Podaj osobę");
                }
                else{
                    const member = msg.mentions.members.first();
                   
                    msg.channel.send( `Dodany do klanu: ${member}`);                                       
                    member.roles.add("611528946655297536");//T
                    member.roles.add("611513496093458451");//seale
                    member.roles.add("577427930964295700");//towarzysz
                    member.roles.add("611532498219958274");//klanowicze                        
                    member.roles.remove("611521055856787456");//przyjaciele
                    member.roles.remove("577252791559389204");//przyjaciel
                    member.roles.remove("611532509452304385");//p
                    member.roles.remove("611866489296781312");//n
                    member.roles.remove("577252790687105053");//nowicjusz
                    
                    break;
                }
            }
        case 'insoj':
            if(!msg.member.hasPermission("MANAGE_ROLES")){
                msg.channel.send("Nie masz uprawnień do tej komendy");
                return;
            }
            else{
                if(!arg[0]){
                    msg.channel.send("Podaj osobę");
                }
                else{
                    const member = msg.mentions.members.first();
                   
                    msg.channel.send( `Nowy sojusznik: ${member}`);                                       
                    member.roles.add("611528982399287306");//s
                    member.roles.add("577252792649908245");//soj
                    member.roles.add("611513496093458451");//seale                        
                    member.roles.add("611521055856787456");//przyjaciele
                    member.roles.remove("577252791559389204");//przyjaciel
                    member.roles.remove("611532509452304385");//p
                    member.roles.remove("611866489296781312");//n
                    member.roles.remove("577252790687105053");//nowicjusz
                    
                    break;
                }
            }                    
            
        case 'open':
                if(!msg.member.hasPermission("MANAGE_ROLES")){
                    msg.channel.send("Nie masz uprawnień do tej komendy");
                    return;
                }
                else{
                    if(!arg[0]){
                        msg.channel.send("Podaj osobę");
                    }
                    else{
                        const member = msg.mentions.members.first();
             
                        msg.channel.send( `Nowo przyjęty: ${member}`); 
                        member.roles.add("611513496093458451");//seale                                                                    
                        member.roles.remove("611866489296781312");//n
                        member.roles.remove("577252790687105053");//nowicjusz
                        member.roles.add("577252791559389204");//przyjaciel
                        member.roles.add("611532509452304385");//p
                        member.roles.add("611521055856787456");//przyjaciele                 
                    }
                break;  
            }

        case 'declan':
            if(!msg.member.hasPermission("MANAGE_ROLES")){
                msg.channel.send("Nie masz uprawnień do tej komendy");
                return;
            }
            else{
                if(!arg[0]){
                    msg.channel.send("Podaj osobę");
                }
                else{
                    const member = msg.mentions.members.first();
                   member.roles.add("611513496093458451");//seale
                    msg.channel.send( `Osoba wyrzucona z klanu: ${member}`);
                    member.roles.remove("632967959635296278");//m2
                    member.roles.remove("577427930964295700");//major
                    member.roles.remove("611528946655297536");//m1
                    member.roles.remove("632967959635296278");//m2
                    member.roles.remove("632967792278110208");//minor
                    member.roles.remove("611532498219958274");//klanowicze
                    member.roles.add("577252791559389204");//przyjaciel
                    member.roles.add("611532509452304385");//p
                    member.roles.add("611521055856787456");//przyjaciele
                    member.roles.remove("691349452711002132");//bb
                    member.roles.add("680021923341795337");//exvivit
                    member.user.dmChannel.send("Zostałeś usunięty z klanu! Zobacz kanał #poleciałem-z-klanu-co-dalej");

                    
                }
             
                break;
            }
            //------------------------Role----------------------//
         //--------------------------Napoje----------------------//
        case `kawa`:         
            var nazwa= msg.member.displayName;  
            msg.channel.send(`Zaparzanie kawy ☕ dla ${nazwa}.`)

            function podanie(){
                msg.channel.send(`Ding! Oto kawa ☕ dla ${nazwa}`);
                msg.member.setNickname(`☕ ${nazwa} `);
            }
            function pokawie(){
                msg.member.setNickname(`${nazwa} `);
            }  
            setTimeout(podanie, 60000)
            setTimeout(pokawie, 600000);   
            break;

        case `piwo`:
            
            
                var nazwa= msg.member.displayName;             
                msg.channel.send(`Nalewanie piwa 🍺 dla ${nazwa}.`)  

                function nalanie(){
                    msg.channel.send(`Oto piwo 🍺 dla ${nazwa}`);
                    msg.member.setNickname(`🍺 ${nazwa} `);
                }   
                function pokawie(){
                    msg.member.setNickname(`${nazwa} `);
                } 
                setTimeout(nalanie, 10000);
                setTimeout(pokawie, 600000);   
                break;

        case `herbata`:    
                    var nazwa= msg.member.displayName;               
                    msg.channel.send(`Zaparzanie herbaty 🍵 dla ${nazwa}.`)      
                    function herbata(){
                        msg.channel.send(`Oto herbata 🍵 dla ${nazwa}.`);
                        msg.member.setNickname(`🍵 ${nazwa} `);
                    }     
                    function pokawie(){
                        msg.member.setNickname(`${nazwa} `);
                    } 
                    setTimeout(herbata, 60000);
                    setTimeout(pokawie, 600000);  
                    break;
        
        case `soczek`:
                    
                    
                    var nazwa= msg.member.displayName;  
                    msg.channel.send(`Nalewanie soczku 🧃 dla ${nazwa}.`)

                    function soczek(){
                        msg.channel.send(`Oto soczek 🧃 dla ${nazwa}.`);
                        msg.member.setNickname(`🧃 ${nazwa} `);
                    }
                    function pokawie(){
                        msg.member.setNickname(`${nazwa} `);
                    } 
                    
                    setTimeout(soczek, 10000);
                    setTimeout(pokawie, 600000); 
                    break;

        case `whisky`:
                    
                    
                        var nazwa= msg.member.displayName;  
                        msg.channel.send(`Nalewanie whisky 🥃 dla ${nazwa}.`)
    
                        function wyha(){
                            msg.channel.send(`Oto whisky 🥃 dla ${nazwa}.`);
                            msg.member.setNickname(`🥃 ${nazwa} `);
                        }
                        function pokawie(){
                            msg.member.setNickname(`${nazwa} `);
                        } 
                        
                        setTimeout(wyha, 10000);
                        setTimeout(pokawie, 600000); 
                        break;            

                //-----------------Napoje-----------------//
                //------------------------------Muzyka----------------------------------//
        case `play` :
            //const connection = await msg.member.voice.channel.join();    
                if(arg[0].startsWith(`https://www.`)){
                    console.log(arg[0])
                    const connection = await msg.member.voice.channel.join();
                        const dispatcher = connection.play(ytdl(arg[0]),{
                            filter: 'audioonly' 
                        });
                }else{
                    const szukaj= arg[0]+" "+arg[1]+" "+arg[2]+" "+arg[3]+" "+arg[4]+" "+arg[5]+" "+arg[6]+" "+arg[7]+" "+arg[8]+" "+arg[9]+" "+arg[10]+" "+arg[11]+" "+arg[12]+" "+arg[13]
                    console.log(arg.toString())
                    search(arg.toString(), opts, async function(err, results) {     
                        console.log(results[0].link)
                        const wynik = results[0].link
                        
                        const connection = await msg.member.voice.channel.join();
                        const dispatcher = connection.play(ytdl(wynik),{
                            filter: 'audioonly' 
                        });    
                        dispatcher.on('end', () => voiceChannel.leave());
                    }) 
                }
                break
        case `vol`:
            const connection = await msg.member.voice.channel.join();
            connection.dispatcher.setVolume(arg[0])
            break;
        case `stop`:
            if(1){
            const connection = await msg.member.voice.channel.join();
            connection.dispatcher.end()
            }
            break;
        case `resume`:
            if(1){
                const connection = await msg.member.voice.channel.join();
                connection.dispatcher.pause()
            }
            break
                   
        case `resume`:
            if(1){
                const connection = await msg.member.voice.channel.join();
                connection.dispatcher.resume()
               }
            break
                      
                    


    }
})



bot.login(config.token);

