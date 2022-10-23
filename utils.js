async function mute(isMute, interaction) {
    try {
        let channel = interaction.member.voice.channel

        if (channel == null) {
            await interaction.reply("You are not in a voice channel!");
            return
        }

        let members = channel.members;

        members.forEach(member => {
            member.voice.setMute(isMute);
        });

        if (isMute)
            await interaction.reply(`🔇 All members on ${channel.name} voice channel were muted!`);
        else
            await interaction.reply(`🔈 All members on ${channel.name} voice channel were unmuted!`);
    } catch (error) {
        await interaction.reply(error);
    }
}

async function deployCommands(REST, Routes, fs, token, client_id, guild_id) {
	const commands = [];
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	
	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		commands.push(command.data.toJSON());
	}
	
	const rest = new REST({
		version: '10'
	}).setToken(token);
	
	(async () => {
		try {
			console.log(`Started refreshing ${commands.length} application (/) commands.`);
	
			const data = await rest.put(
				Routes.applicationGuildCommands(client_id, guild_id), {
					body: commands
				},
			);
	
			console.log(`Successfully reloaded ${data.length} application (/) commands.`);
		} catch (error) {
			console.error(error);
		}
	})();
}

module.exports = {
    mute, deployCommands
};