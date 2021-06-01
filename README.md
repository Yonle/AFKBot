# AFKBot
A well, Very simple AFK bot for discord that written in [NodeJS](https://nodejs.org) with [Discord.js](https://discord.js.org) Library.

## Story of this project
First time, I think writting a AFK bot code is very hard to do in Discord.js, But i'm wrong, I think multiple time how to do it and finally, I made a very simple code line. I hope you guys enjoy it.

## Setting everything up
```bash
git clone https://github.com/Yonle/AFKBot
cd AFKBot
npm install --save-optional
```

## Configuration
For [**Heroku**](https://heroku.com) user, Go to **App Settings** then add **TOKEN** in **Config Vars** section with your bot token as the value.
![Putting Token in Heroku](https://media.discordapp.net/attachments/839047579512602681/847729094313508904/Screenshot_2021_0528_145129.png)

For self-host user, Install `dotenv` package and fill all required fields in `.env.example` files. Then rename the file as `.env`
```
# Isn't that simple? 0 Third party, Say what now? =)
# Rename this file as .env after adding your token. Then run after your job done, Good luck....

TOKEN=
```

## Running this bot
```bash
node index.js
# Or
npm start
```
To make `@mention, @mention is busy` does not gets `@invalid-user` response, Enable **Server Members Intend** in your discord OAUTH App. 

## Database Support
This repo is using [`Map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). To get a experience of full database support, Use [enmap](https://enmap.evie.dev/)

## Community
- Discord
  - [My Discord](https://discord.gg/9S3ZCDR)
  - [Termux Discord](https://discord.gg/gF3gSgwUqw)
  - [Glitch.com Unofficial Discord](https://discord.gg/6CWnE6W)
- Telegram
  - [My Telegram Group](https://t.me/yonlecoder)
  - [Termux Group](https://t.me/termux24x7)
  - [Glitch.com Unofficial Group](https://t.me/glitchdotcom_community)
