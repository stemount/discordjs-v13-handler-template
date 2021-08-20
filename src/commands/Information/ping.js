const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Gets API latency in ms'),
	async execute(interaction, client) {
		await interaction.reply(`API Latency: **\`${Math.round(client.ws.ping)}ms\`**`);
	}
};