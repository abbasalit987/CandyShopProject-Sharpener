const path = require('path');
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./route/admin');
const sequelize = require('./util/database');

const Item = require('./model/item');

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);

sequelize
  .sync()
  .then(result => {
    app.listen(9000);
  })
  .catch(err => {
    console.log(err);
  });
