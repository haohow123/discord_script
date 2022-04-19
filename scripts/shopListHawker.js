import https from 'https';
import dotenv from 'dotenv';
dotenv.config();

// send shop list message
const shopListPromise = () =>
  new Promise((resolve, reject) => {
    const options = {
      hostname: 'discord.com',
      path: `/api/v9/channels/${process.env.HAWK_CHANNEL_ID}/messages`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: process.env.DISCORD_TOKEN,
      },
    };

    const data = JSON.stringify({
      content: '&shop list',
    });
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

    req.end(data);
  });

export default shopListPromise;
