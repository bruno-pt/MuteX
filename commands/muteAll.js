const {
	SlashCommandBuilder,
} = require('discord.js');

const { mute } = require('../utils');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute-all')
		.setDescription('Mute all members in the voice channel you are in.'),
	async execute(interaction) {
		await mute(true, interaction)
	},
};