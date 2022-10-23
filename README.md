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
* Node.Js
* Ngrok Account
* Ngrok.exe Downloaded

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

### ⚙️ Configuring Ngrok

* Open ngrok.exe
* Run the command bellow
```
ngrok.exe http 80
```
This will start a connection that camouflage your localhost with a random-generated valid address. <br> <br>
When you access that address, it'll redirect to your localhost:80 <br> <br>
This is necessary 'cause Discord needs to comunicate with a host. <br> <br>
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
