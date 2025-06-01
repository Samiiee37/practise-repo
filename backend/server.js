//packages
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
//routes imports
import authRoutes from './routes/authroutes.js'
import homeRoutes from './routes/home.js'
//middlewares imports
import authenticateToken from './middlewares/verifytoken.js'
//dotenv config and variables
dotenv.config(); // load environment variables from .env for the whole node.js process
const URI = process.env.MONGO_URI
//connect to database
connectDB(URI);
//starting app
const app = express();
const port = 3000;
//comman middlewares
app.use(bodyParser.json());
//routes
app.use('/api/auth', authRoutes);
app.use('/api/home', authenticateToken, homeRoutes);
//port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});