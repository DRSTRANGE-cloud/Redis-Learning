import express from "express";
import Redis from "ioredis";

const app = express();
const PORT = 3000;

app.use(express.json());

const redis = new Redis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("error", (error) => {
  console.error("Redis Error:", error.message);
});

const QUEUE_KEY = "emails";

// Add email to queue
app.post("/welcome-email", async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({
        error: "data is required"
      });
    }

    await redis.lpush(QUEUE_KEY, JSON.stringify(data));

    res.status(201).json({
      message: "Email added to queue",
      data
    });
  } catch (error) {
    console.error("Queue error:", error);
    res.status(500).json({
      error: "Failed to add email"
    });
  }
});

// Process email from queue
app.get("/process-emails", async (req, res) => {
  try {
    const emailData = await redis.rpop(QUEUE_KEY);

    if (!emailData) {
      return res.status(404).json({
        message: "No emails in queue"
      });
    }

    res.json({
      message: "Email processed",
      emailData: JSON.parse(emailData)
    });
  } catch (error) {
    console.error("Processing error:", error);
    res.status(500).json({
      error: "Failed to process email"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});