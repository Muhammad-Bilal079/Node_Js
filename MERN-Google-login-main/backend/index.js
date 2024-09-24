import express from 'express'
import cors from 'cors'
const app = express();
import dotenv from 'dotenv';
import './models/dbConnect.js'
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use('/auth/', authRoutes); // <- NEW LINE

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})