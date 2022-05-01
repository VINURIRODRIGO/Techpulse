/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const logger = require('./logger');
const routes = require('../routes');
const argv = require('./argv');
const port = require('./port');

async function main() {
  await mongoose.connect('mongodb+srv://aasifshakoor:d9b9PCcJczwZpMuf@cluster0.scprd.mongodb.net/test');
}

main().then(() => {
// var key = fs.readFileSync(__dirname + '/certificates/selfsigned.key');
// var cert = fs.readFileSync(__dirname + '/certificates/selfsigned.crt');
// var options = {
//   key: key,
//   cert: cert
// };

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();
app.use(express.json());
app.use("/api", routes);

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/', (req, res) => {
  res.send('Now using https..');
});

// var server = https.createServer(options, app);

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
}).catch(
  err => console.log(err)
);

