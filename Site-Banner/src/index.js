import express from "express";
import Redis from "ioredis";

const app = express();
const port = 3000;

app.use(express.json());

// Connect to Redis
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

const bannerKey = "site-banner";

// Update banner
app.post("/banner", async (req, res) => {
  try {
    const { message } = req.body;
    if (typeof message !== "string") {
      return res.status(400).json({ error: "A message string is required" });
    }
    await redis.set(bannerKey, message);
    res.json({ message: "Banner updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update banner" });
  }
});

// Check whether banner exists
app.get("/banner/exists", async (req, res) => {
  try {
    const bannerMessage = await redis.get(bannerKey);
    res.json({
      exists: bannerMessage !== null,
      message: bannerMessage ?? "",
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve banner" });
  }
});

// Start server only once
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
