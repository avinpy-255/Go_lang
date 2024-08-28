import express from 'express';
import dotenv from 'dotenv'
import connectDB from './utils/connectDB';
import authRoutes from './routes/authRoutes';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');

});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})