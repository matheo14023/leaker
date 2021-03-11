const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready", () => {
    console.log("Bot pret!");
});

Client.on("message", message => {
    if(message.author.bot) return;

    //!Commandes
    if(message.content == prefix + "Commandes"){
        message.reply("Voici les commandes disponibles.  **!Teaser saison 6**   **!Version du BOT**   **!Site internet**   **!Quand arrive la saison 6 ?**")

    }

    //!Teaser saison 6
    if(message.content == prefix + "Teaser saison 6"){
        message.reply("No Teaser")

    }

    //!Version
    if(message.content == prefix + "Version du BOT"){
        message.reply("La version actuel du bot: **1.0.0**")

    }

    //!Site internet
    if(message.content == prefix + "Site internet"){
        message.reply("Pas de site internet disponible pour le moment !")
    }

    //!Commandes STAFF
    if(message.content == prefix + "Commandes STAFF"){
        message.reply("Voila les commandes STAFF disponible avec Jimy:  !Ban **@membre**   !Kick **@membre**   !Clear **nombre de msg à sup**")

    }

    //!Quand arrive la saison 6 ?
    if(message.content == prefix + "Quand arrive la saison 6 ?"){
        message.reply("La saison 6 arrive le mardi 16 mars !")
        
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


Client.login("ODE5MzAzODI4MzE4NTg0ODU0.YEkqJg.wzutfnx2ZWWD6GpfQ5SKvoaye2Q");