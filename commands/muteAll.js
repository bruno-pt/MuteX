const {
	SlashCommandBuilder,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute-all')
		.setDescription('Mute all members in the voice channel you are in.'),
	async execute(interaction) {
		let members = await interaction.channel.members;

		members.forEach(member => {
			member.voice.setMute(true);
		});

		await interaction.reply('All members muted!');
	},
};