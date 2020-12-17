const logger = require('@greencoast/logger');

module.exports = {
    name: 'move',
    description: `Move messages`,
    emoji: ':speaking_head:',
    execute(message, options) {
        //const { channel } = message.member.voice;
        const { ttsPlayer, name: guildName, voice } = message.guild;
        const connection = voice ? voice.connection : null;
        const atLeastOneWord = options.args;

        //const channel = message.guild.channels.cache.get(c => c.name === 'bot-channel')
        const channel = message.client.channels.cache.get('761907315620184086')

        channel.send(message.content);

        //channel.send("-play");
        //761907315620184086

        message.delete();
        return;

        if (connection) {
            message.delete();
            const dispatcher = voice.connection.play(fs.createReadStream('src/audio/audio' + clip + '.mp4'));

            dispatcher.on('start', () => {
                console.log('Clip ' + clip + ' is now playing!');
            });

            dispatcher.on('finish', () => {
                console.log('audio.mp3 has finished playing!');
            });

            dispatcher.on('error', console.error);
        } else {
            channel.join()
            .then(connection => {
                message.delete();
                //message.channel.send(`Joined ${channel}.`);
                const dispatcher = connection.play(fs.createReadStream('src/audio/audio' + clip + '.mp4'));

                dispatcher.on('start', () => {
                    console.log('Clip ' + clip + ' is now playing!');
                });

                dispatcher.on('finish', () => {
                    console.log('audio.mp3 has finished playing!');
                });

                dispatcher.on('error', console.error);
            })
            .catch((error) => {
                throw error;
            });
        }
    }
}