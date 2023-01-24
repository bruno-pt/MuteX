const {
	SlashCommandBuilder
} = require('discord.js');

const {
	mute
} = require('../utils');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unmute-all')
		.setDescription('Unmute all members in the voice channel you are in.'),
	async execute(interaction) {
		await mute(false, interaction)
	},
};