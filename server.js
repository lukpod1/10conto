const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3030;

const { User } = require('./app/models')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use((req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'});
});

User.create({
    name: 'Teste',
    email: 'teste@teste.com',
    password: '123'
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})