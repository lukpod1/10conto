const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use((req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'});
});

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

