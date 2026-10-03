import express from 'express';
import Redis from 'ioredis';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
app.get('/', async (req, res) => {
    const reply = await redis.get('key');
    res.send(`Value from Redis: ${reply}`);
});

app.get("/mongo", async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        res.send('Connected to MongoDB');
    } catch (error) {
        res.status(500).send('Error connecting to MongoDB: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 