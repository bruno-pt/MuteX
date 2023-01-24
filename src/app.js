require('dotenv').config()
const fs = require('node:fs');
const path = require('node:path');
const {
    deployCommands
} = require('./utils.js');

const {
    Client,
    Events,
    GatewayIntentBits,
    Collection
} = require('discord.js');

const {
    REST,
    Routes
} = require('discord.js');

console.log("Starting MuteX & Discord client...");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

client.once(Events.ClientReady, () => {
    console.log('Discord client started successfully!');
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true
        });
    }
});

client.on("ready", () => {
    let count = client.guilds.cache.size

    console.log(`Bot is in ${count} servers!`);

    /*const guilds = client.guilds.cache.map(async guild => {
        return {
            id: guild.id,
            name: guild.name,
            membersCount: guild.memberCount,
            joinedAt: guild.joinedAt
        }
    });


    const data = {
        count: guilds.length,
        guilds: guilds
    };

    fs.writeFile("guilds.json", JSON.stringify(data, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("guilds.json has been created!");
    });*/
});

client.on('guildCreate', async (guild) => {
    //const json = require('../guilds.json');

    console.log(`Joined guild and are deploying commands on: (id:${guild.id}) ${guild.name}`);

    let count = client.guilds.cache.size

    console.log(`Bot is in ${count} servers!`);

    /*json.guilds.push({
        id: guild.id,
        name: guild.name
    });

    json.count = json.guilds.length;

    fs.writeFile("guilds.json", JSON.stringify(json, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Guild created at guilds.json!");
    });*/

    await deployCommands(REST, Routes, fs, process.env.TOKEN, process.env.CLIENT_ID, id);
});

/*client.on('guildUpdate', (oldGuild, newGuild) => {
    if (oldGuild.name !== newGuild.name) {
        const json = require('../guilds.json');

        const index = json.guilds.findIndex(g => g.id === oldGuild.id);

        json.guilds[index].name = newGuild.name;

        fs.writeFile("guilds.json", JSON.stringify(json, null, 4), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`The name of ${oldGuild.name} has been updated to ${newGuild.name} in the guilds.json file`);
        });
    }
});*/

client.on("guildDelete", guild => {
    //const json = require('../guilds.json');

    console.log(`The bot has been removed from: (id:${guild.id}) ${guild.name}`);

    let count = client.guilds.cache.size

    console.log(`Bot is in ${count} servers!`);

    /*const guilds = json.guilds.filter(g => g.id !== guild.id);

    json.count = guilds.length;
    json.guilds = guilds;

    fs.writeFile("guilds.json", JSON.stringify(json, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Guild deleted from guilds.json!");
    });*/
});

client.login(process.env.TOKEN);

console.log("MuteX started successfully!");

setInterval(() => {
    let count = client.guilds.cache.size
    console.log(`Mutex Bot is in ${count} servers!`);
}, 600000);