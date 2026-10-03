import express from "express";
import { Queue } from "bullmq";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const connection = new Redis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null, // Prevents Redis from throwing errors on connection loss
});

// Initialize the queue once outside the route
const emailQueue = new Queue("emails", { connection });

app.post("/welcome-email", async (req, res) => {
  try {
    const { data } = req.body;

    // Pass options as the 3rd argument to queue.add()
    await emailQueue.add("email-job", data, {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
    });

    res.status(200).send("Job added to the queue");
  } catch (error) {
    console.error("Error adding job to queue:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});