const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const logger = require('./logger');

async function main() {
  await mongoose.connect('mongodb+srv://aasifshakoor:d9b9PCcJczwZpMuf@cluster0.scprd.mongodb.net/test');
 
}

main().then(() => {
  const app = express();
  const port = 3001;
  app.use(express.json());

  app.listen(port, () => {
    console.log("Server has started!")

    console.log(`Parking app middleware listening on port ${port}`)
  });

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