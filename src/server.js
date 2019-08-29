const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
const Sequelize = require('sequelize')
const database = new Sequelize('postgres://postgres:postgres@localhost:5432/ctrlFinan');

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use((req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'});
});

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

