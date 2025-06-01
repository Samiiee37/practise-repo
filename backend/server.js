//packages
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
//dotenv config and variables
dotenv.config();
const URI = process.env.MONGO_URI
//connect to database
connectDB(URI);
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