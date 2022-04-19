import https from 'https';
import dotenv from 'dotenv';
dotenv.config();

// send shop list message
const getMessages = () =>
    new Promise((resolve, reject) => {
        const options = {
            hostname: 'discord.com',
            path: `/api/v9/channels/${process.env.GET_MESSAGES_CHANNEL_ID}/messages`,
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': process.env.DISCORD_TOKEN,
            },
        };

        var str = '';
        const req = https.request(options, (res) => {
            res.on('data', (d) => {
                str += d;
            });

            res.on('error', (error) => {
                reject(error);
            });

            res.on('end', () => {
                resolve(str);
            });
        });

        req.end();
    });

getMessages().then((response) => console.log(JSON.parse(response)))

export default getMessages;
