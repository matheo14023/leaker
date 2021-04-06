const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready", () => {
    console.log("Bot pret!");
});

Client.on("message", message => {
    if(message.author.bot) return;
    
    if(message.content == prefix + "Teaser saison 7"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Teaser saison 7")
        .setDescription("Pas de teaser pour le moment !")
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Maps"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Maps")
        .setDescription("Maps saison 7")
        .setImage("https://cdn.discordapp.com/attachments/821052702762598450/821411857067409458/20210316_072135.jpg")
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Leaks"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Leaks")
        .setDescription("Pas de leaks pour le moment reviens demain !!")
        .setAuthor("Twitter: @FrLeakeur")
        .setImage("https://cdn.discordapp.com/attachments/821052702762598450/821081611353325598/no_leaks.jpg")
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Video en première Fortnite FR"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Video en première Fortnite FR")
        .setDescription("Pas de vidéo en première pour le moment !")
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Commandes"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Commandes BOT")
        .setDescription("Voici les commandes disponible avec le BOT")
        .addField("**!Teaser saison 7**", "Membre", true)
        .addField("**!Video en première Fortnite FR**", "Membre", true)
        .addField("**!Leaks**", "Membre", true)
        .addField("**!Version**", "Membre", true)
        .addField("**!Prochaine MAJ Fortnite**", "Membre", true)
        .addField("**!Quand arrive la saison 7**", "Membre", true)
        .addField("**!Commandes clé AES**", "Membre", true)
        .addField("**!Maps**", "Membre", true)
        .addField("**!Commandes STAFF**", "STAFF", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Commandes clé AES"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Commandes clé AES")
        .setDescription("Voici les commandes pour les clé AES")
        .addField("**!pakchunk1000-WindowsClient**", "Membre", true)
        .addField("**!pakchunk1001-WindowsClient**", "Membre", true)
        .addField("**!pakchunk1002-WindowsClient**", "Membre", true)
        .addField("**!pakchunk1003-WindowsClient**", "Membre", true)
        .addField("**!pakchunk1004-WindowsClient**", "Membre", true)
        .addField("**!pakchunk1006-WindowsClient**", "Membre", true)
        .addField("**!pakchunk1008-WindowsClient**", "Membre", true)
        .addField("**!Clé statique**", "Membre", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Version"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Version du BOT")
        .setDescription("Voici la version du BOT")
        .addField("Version: **1.0.4**", "Prochaine version **1.0.5**", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Commandes STAFF"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Commandes STAFF BOT")
        .setDescription("Voici les commandes STAFF disponible avec le BOT")
        .addField("**!Ban**", "STAFF", true)
        .addField("**!Kick**", "STAFF", true)
        .addField("**!Clear**", "STAFF", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Site internet"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Site internet")
        .setDescription("Site internet leaker")
        .addField("**Le site n'est pas disponible**", "Pas de date de sortir pour le moment !", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Quand arrive la saison 7"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Quand arrive les saison 7")
        .addField("La saison 7 arrive le:", "8 juin", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "pakchunk1000-WindowsClient"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .addField("pakchunk1000-WindowsClient", "```0xE838E57FAFD70824CCA48E0A6CD1073785FAA6B81C9DF42DAEEFB3F914C7B36B```", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "pakchunk1001-WindowsClient"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .addField("pakchunk1001-WindowsClient", "```Pas de clé AES pour le moment !```", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "pakchunk1002-WindowsClient"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .addField("pakchunk1002-WindowsClient", "```0x3946CD5B4D0E9902C277D88B035DECA0C538C18B5DD114DCFA5124A0F76F1785```", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "pakchunk1003-WindowsClient"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .addField("pakchunk1003-WindowsClient", "```0xEB1338658B74500CA5CAE22016B98E82AE1F6151F60A113340D725F0A190174A```", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "pakchunk1004-WindowsClient"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .addField("pakchunk1004-WindowsClient", "```0x4975072500EEC411AFD0FCC3B6E56C0F1372B9B1BFA601FDB3D14CBE2992D184```", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "pakchunk1006-WindowsClient"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .addField("pakchunk1006-WindowsClient", "```0x04EE5A6670D986F1EC5052EC243DAFB58090EA26295FB2E1979EB99C3B0185A1```", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "pakchunk1008-WindowsClient"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .addField("pakchunk1008-WindowsClient", "```0x67C8B1A2A70212216A507D6A79CFB250D4133F5F83D71423630E850E95106BD7```", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.content == prefix + "Clé statique"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .addField("pClé statique", "```0xFE478B39DF1B1D4E8D8DFD38272F216DBE933E7F80ADCC45DC4108D70428F37D```", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }


    if(message.content == prefix + "Prochaine MAJ Fortnite"){
        var embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Prochaine MAJ Fortnite")
        .addField("Pas de date pour une prochaine MAJ", "Prochaine MAJ: 16.20", true)
        .setTimestamp()
        .setFooter("Twitter: @FrLeakeur")

    message.channel.send(embed)
    }

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "Ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.")
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été banni avec succès !");
            }
            else {
                message.reply("Imposible de bannir ce membre.");
                }
            }
        }
        else if(message.content.startsWith(prefix + "Kick")){
            let mention = message.mentions.members.first();

            if(mention.undefined){
                message.reply("Membre non ou mal mentionné !");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick avec succès !");
                }
                else {
                    message.reply("Imposible de kick ce membre.");
                }
            }
        }
    }
    if(message.member.permissions.has("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "Clear")){
            let args = message.content.split(" ");
            
            if(args[1] == undefined){
                message.reply("Nombre de message non ou mal défini.");
            }
            else {
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.reply("Nombre de message non ou mal defini.");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("supession de " + messages.size + " messages réussi !");
                    }).catch(err => {
                        console.log("Erreur de clear : " + err);
                    });
                }
            }
        }
    }
});


Client.login("ODE5MzAzODI4MzE4NTg0ODU0.YEkqJg.RlqO-KQIeIGJi-pgjsugcrN9lzk");