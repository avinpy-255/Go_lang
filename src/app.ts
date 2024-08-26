import express from 'express';
import superRoutes from './routes/supeRoutes';

const app = express();

app.get("/", (req, res) => {
    res.json({
        "msg": "Success"
    })
})

app.use(express.json());
app.use('/super', superRoutes);


export default app;