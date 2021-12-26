const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require("./config/connection");
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

//app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});




