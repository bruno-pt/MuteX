const {
	SlashCommandBuilder,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unmute-all')
		.setDescription('Unmute all members in the voice channel you are in.'),
	async execute(interaction) {
		let members = await interaction.channel.members;

		members.forEach(member => {
			member.voice.setMute(false);
		});

		await interaction.reply('All members unmuted!');
	},
};