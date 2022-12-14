const logger = require('@greencoast/logger');
const TTSPlayer = require('../../classes/TTSPlayer');
const prefix = process.env.PREFIX || require('../../../settings.json').prefix;
const { updatePresence, executeCommand } = require('../../common/utils');

const handleDebug = (info) => {
  logger.debug(info);
};

const handleError = (error) => {
  logger.error(error);
};

const handleGuildCreate = (guild, client) => {
  logger.info(`Joined ${guild.name} guild!`);
  updatePresence(client);
  guild.ttsPlayer = new TTSPlayer(guild);
};

const handleGuildDelete = (guild, client) => {
  logger.info(`Left ${guild.name} guild!`);
  updatePresence(client);
  guild.ttsPlayer = null;
};

const handleGuildUnavailable = (guild) => {
  logger.warn(`Guild ${guild.name} is currently unavailable!`);
};

const handleInvalidated = () => {
  logger.error('Client connection invalidated, terminating execution with code 1.');
  process.exit(1);
};

const handleMessage = (message, client) => {

    // Id of MEE6, Groovy, Rythm(!), Rythm(-) and their prefixes
    if (message.content.startsWith("!") || message.content.startsWith("-") || message.author.id == '159985870458322944' || message.author.id == '234395307759108106' || message.author.id == '252128902418268161' || message.author.id == '235088799074484224') {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        //console.log(message);
      
        const options = {
          args,
          commands: client.commands
        };
      
        executeCommand(client, message, options, 'move'); 
    }
    
  if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) {
    return;
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  const options = {
    args,
    commands: client.commands
  };

  executeCommand(client, message, options, command);
};

const handleReady = (client) => {
  logger.info('Connected to Discord! - Ready.');
  updatePresence(client);

  client.guilds.cache.each((guild) => {
    guild.ttsPlayer = new TTSPlayer(guild);
  });
};

const handleWarn = (info) => {
  logger.warn(info);
};

module.exports = {
  handleDebug,
  handleError,
  handleGuildCreate,
  handleGuildDelete,
  handleGuildUnavailable,
  handleInvalidated,
  handleMessage,
  handleReady,
  handleWarn
};
