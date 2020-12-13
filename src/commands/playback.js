const logger = require('@greencoast/logger');
const fs = require('fs');
const track = 39 // number of audio files

module.exports = {
    name: 'play',
    description: `Play an audio clip from ριο`,
    emoji: ':speaking_head:',
    execute(message, options) {
        const { channel } = message.member.voice;
        const { ttsPlayer, name: guildName, voice } = message.guild;
        const connection = voice ? voice.connection : null;
        const atLeastOneWord = options.args;


        if (!channel) {
            message.reply('you need to be in a voice channel first.');
            return;
        }

        if (!channel.joinable) {
            message.reply('I cannot join your voice channel.');
            return;
        }

        // Play random track
        let clip = Math.floor(Math.random() * track);

        if ((atLeastOneWord.length == '1' && parseInt(atLeastOneWord[0]) <= (track - 1) && parseInt(atLeastOneWord[0]) >= 0) || parseInt(atLeastOneWord[0]) === 666) {
            clip = atLeastOneWord;
        }

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