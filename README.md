# <p align="center">MuteX</p>

> This is a project that I initially have an ideia to mute/unmute all members in a channel automatically to play Among Us with my friends! xD 
<p align="center">
  <img src="https://media.tenor.com/ljBF25IP5QQAAAAC/among-us-dance-dance.gif" width="200" height="200">
</p>
<br>

# 💭 How can I add MuteX to my server?
<p align="center">
  <a href="https://discord.com/api/oauth2/authorize?client_id=1033177514782228490&permissions=2697014336&scope=bot%20applications.commands">Click on me!</a>
</p>

# 🚀 Self-hosting
You can host MuteX instance in your local machine! But you'll need some experience to do that and it's for users that want to learn or help the project! 😁

### 📦 Prerequisites

Before starting, make sure you've met the following requirements:
* Create an App on Discord Developers <a href="https://discord.com/developers/applications">here!</a>
* Node.Js
* Ngrok Account
* Ngrok.exe Downloaded
* (Optional) Enable Developer Mode on Discord: User Settings -> Advanced -> Developer Mode

Obs.: The Developer Mode option will allow you to get IDs from users, text channels, voice channels, server, etc. It'll only help you on development and isn't mandatory.

### 💻 Installing MuteX:

* Clone the repository
```
git clone https://github.com/brunopeternella/MuteX.git
```

* Go to the repository
```
cd MuteX
```

* Install node dependencies
```
npm install
```
### ⚙️ Configuring .env
All that information is found in your app settings.

* CLIENT_ID - It's your... literally... Client ID...
* TOKEN - It's your Client Secret

<p align="center">
  <img src="https://user-images.githubusercontent.com/60880102/197380908-c28629b2-5386-42a7-9b56-75f78054c614.jpg" width="611" height="151">
</p>

### ⚙️ Configuring Ngrok

* Open ngrok.exe
* Run the command bellow
```
ngrok.exe http 80
```
This will start a connection that camouflage your localhost with a random-generated valid address. <br> <br>
When you access that address, it'll redirect to your localhost:80 <br> <br>
This is necessary because Discord needs to comunicate with a host. <br> <br>
In other words, what server Discord will call when someone uses your bot commands? It can't be your locahost, literally. But with ngrok, that valid address will redirect without any problems and will work! =D <br>

### ☕ Running MuteX

There are two commands that you can use:

* Start MuteX without Nodemon
```
npm start
```

* Start MuteX with Nodemon
```
npm run dev
```

If you're developing, use with Nodemon, it'll auto reload the app when you change anything on the code. <br>
Otherwise, if you'll let the app runing for sometime, use without Nodemon.
