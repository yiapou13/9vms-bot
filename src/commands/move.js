const logger = require('@greencoast/logger');

module.exports = {
    name: 'move',
    description: `Move messages`,
    emoji: ':speaking_head:',
    execute(message, options) {
        const channel = message.client.channels.cache.get('789253404312600596') // id of now-playing
        // Id of MEE6, Groovy, Rythm(!), Rythm(-)
        if (message.author.id == '159985870458322944' || message.author.id == '234395307759108106' || message.author.id == '252128902418268161' || message.author.id == '235088799074484224') {
            /* if (message.embeds.description.includes("https://groovy.bot/premium")) {
                message.delete()
                .then(console.log(`Groovy inactivity message deleted successfully`))
                .catch((error) => {
                    throw error;
                });

                return;
            } */
            
            // If content == '', play command has been issued, if content != '', queue command has been issued 
            if (message.content == '') {
                channel.send(message.embeds)
                .then(console.log(`Embed from other bots moved successfully`))
                .catch((error) => {
                    throw error;
                });
            } else {
                channel.send(message.content)
                .then(console.log(`Message from other bots moved successfully`))
                .catch((error) => {
                    throw error;
                });
            }
            
        }

        message.delete()
        .then(console.log(`Message deleted successfully`))
        .catch((error) => {
            throw error;
        });

        return;
    }
}