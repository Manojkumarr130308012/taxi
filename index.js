const express = require('express');
const app = express();

const config=require('./config/config.js');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: 'http://192.168.1.131:3000' }));
app.use(cors({ origin: 'https://www.taxiappz.com' }));

app.use(
    cors({
      origin: true,
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
  app.options(
    '*',
    cors({
      origin: true,
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );

const db = require("./middleware/middleware.js");



// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });


  const enquiryRouter = require('./router/enquiry.js');


  app.use("/enquiry", enquiryRouter);

app.listen(config.PORT, () => console.log(`url-shortener listening on port ${config.PORT}!`));