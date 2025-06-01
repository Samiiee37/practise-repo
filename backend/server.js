//packages
const express = require('express');
const bodyParser = require('body-parser');
//starting app
const app = express();
const port = 3000;
//middlewares
app.use(bodyParser.json());
//http requests
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});



//port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});