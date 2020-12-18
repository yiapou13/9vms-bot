const logger = require('@greencoast/logger');

module.exports = {
    name: 'delete',
    description: `Delete batch messages`,
    emoji: ':speaking_head:',
    execute(message, options) {
        const channel = message.client.channels.cache.get('583325073793089546') // id of 9VMS-chat

        channel.messages.fetch({ limit: 100 }).then(messages => {
            console.log(`Received ${messages.size} messages`);

            //Iterate through the messages here with the variable "messages".
            messages.forEach(message => {
                if (message.content.startsWith('!') || message.content.startsWith('+') || message.content.startsWith('+') || message.author.id == '159985870458322944' || message.author.id == '234395307759108106') {
                    message.delete()
                }
            })
        })
    
        return;
    }
}