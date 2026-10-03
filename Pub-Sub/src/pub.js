import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const publisher = new Redis("redis://localhost:6379");

app.post("/publish", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Message is required"
    });
  }

  await publisher.publish("messages", message);

  res.json({
    status: "Message published"
  });
});

app.listen(3000, () => {
  console.log("Publisher running on port 3000");
});