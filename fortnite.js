const { richEmbed } = require("discordjs");
const { cyan } = require("../../colours.json");
const { stripIndents } = require("common-tag");
const fortnite = require("simple-fortnite-api"), Client = new fortnite("78dabd15-34d0-4094-92ea-28d3d7611f40");

module.exports = {
    config: {
        name: "fortnite",
        description: "Afficher les statistiques d'un utilisateur.",
        usage: "<user> <platform>",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["ftn"],
    },
    run: async (bot, message, args) => {
        if(!args[0]) return message.channel.send("Veuillez fournir un nom d'utilisateur.")
        if(args[1] && !["Total", "Solo", "Duo", "Squad"].includes(args[1])) return message.channel.send("Usage: `!Fortnite <username> <gametype>`\ngameType: Totale, Solo, Duo, Squad")
        let gametype = args[1] ? args[1].toLowerCase() : "Total";

        let data = await Client.find(args[0])
        if(data && data.code === 404) return message.channel.send("Impossible de trouver un utilisateur avec ce nom d'utilisateur.")
            const { image, url, username } = data;
            const { scorePerMin, winPercent, kills, score, wins, kd, matches } = data[gametype]

                const embed = new RichEmbed()
                    .setColor(cyan)
                    .setAuthor(`Epic Games (Fortnite) | ${username}`, image)
                    .setThumbnail(image)
                    .setDescription(stripIndents`**Gamemode:** ${gametype.slice(0, 1).tuUpperCase() + gametype.slice(1)}
                    **kills:** ${kills || 0}
                    **score:** ${score || 0}
                    **score per win:** ${scorePerMin || 0}
                    **wins:** ${wins || 0}
                    **win ratio:** ${winPercent || "0%"}
                    **kill/death Ratio:** ${kd || 0}
                    **parti jouer:** ${matches || 0}
                    **link:** [link to profile]($url))`)
                    .setTimesTamp

                    message.channel.send(embed)
    }
}