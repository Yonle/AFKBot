const Discord = require("discord.js");
const bot = new Discord.Client();
const guild = new Map();

// We're gonna load dotenv, Yet
try {
	let dotenv = require("dotenv");
	dotenv.config();
} catch (error) {
	// Do nothing. Because dotenv is Optional Dependencies.
}

// Debug Logging
// Only required if ya want know your bot status
// Not including received message and etc :^)
bot.on('debug', console.log);
bot.on('message', (message) => {
	// Ignore if it's DM
	if (!message.guild) return;
	let reason = message.content.split(' ').slice(1).join(' ');
	let mention = message.mentions.users.first();
	let author = message.author;
	let afk = guild.get(message.guild.id);

	if (typeof afk != "object") {
		guild.set(message.guild.id, new Map());
		afk = guild.get(message.guild.id);
	}

	if (author.id === bot.user.id || message.webhookID || message.channel.type != "text") return;
	if (mention && mention.id == bot.user.id && !afk.has(author.id) && !reason) {
		return message.channel.send(`Hey ${author}, To set your status as AFK user, Mention me with the reason. Example: ${bot.user} Studying`).then(m => {
			setTimeout(() => m.delete().catch(() => {}), 1000 * 10);
		});
	} else if (mention && mention.id == bot.user.id && reason.length && !afk.has(author.id)) {
		afk.set(author.id, reason);
		return message.reply("You're now AFK.", {
			embed: {
				color: 1048575,
				description: reason
			}
		});
	} else if (mention && afk.has(mention.id) && author.id != mention.id) {
		message.reply(`${mention} is Busy right now.`, {
			embed: {
				color: 16773120,
				description: afk.get(mention.id)
			}
		});
	} else if (afk.has(author.id)) {
		return message.channel.send(`Welcome back, ${author}. I removed your AFK.`, {
			embed: {
				color: 1048575,
				title: "Last AFK Reason:",
				description: afk.get(author.id)
			}
		}).then(() => afk.delete(author.id));
	}
});

bot.login(process.env.TOKEN);

process.on('unhandledRejection', console.error);
