import express from "express";
import Redis from "ioredis";

const app = express();
const PORT = process.env.PORT || 3000;

const redis = new Redis({
  host: "localhost",
  port: 6379,
});

app.use(express.json());

// Create user
app.post("/user", async (req, res) => {
  try {
    const { id, name, email } = req.body;

    if (!id || !name || !email) {
      return res.status(400).json({
        error: "id, name and email are required",
      });
    }

    const user = { id, name, email };

    await redis.set(`user:${id}`, JSON.stringify(user));

    res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Get single user
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await redis.get(`user:${id}`);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.json(JSON.parse(user));
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const keys = await redis.keys("user:*");

    const userKeys = keys.filter(
      (key) => !key.includes(":friends")
    );

    const users = [];

    for (const key of userKeys) {
      const user = await redis.get(key);

      if (user) {
        users.push(JSON.parse(user));
      }
    }

    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: "Failed to get users",
    });
  }
});

// Add friend
app.post("/user/:id/friends", async (req, res) => {
  try {
    const { id } = req.params;
    const { friendId } = req.body;

    if (!friendId) {
      return res.status(400).json({
        error: "friendId is required",
      });
    }

    await redis.sadd(`user:${id}:friends`, friendId);

    res.status(201).json({
      message: "Friend added",
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add friend",
    });
  }
});

// Get friends
app.get("/user/:id/friends", async (req, res) => {
  try {
    const { id } = req.params;

    const friends = await redis.smembers(`user:${id}:friends`);

    res.json(friends);
  } catch (error) {
    res.status(500).json({
      error: "Failed to get friends",
    });
  }
});

// Simple browser page displaying profiles
app.get("/", async (req, res) => {
  try {
    const keys = await redis.keys("user:*");

    const userKeys = keys.filter(
      (key) => !key.includes(":friends")
    );

    const users = [];

    for (const key of userKeys) {
      const user = await redis.get(key);

      if (user) {
        users.push(JSON.parse(user));
      }
    }

    const cards = users
      .map(
        (user) => `
          <div class="card">
            <h2>${user.name}</h2>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Email:</strong> ${user.email}</p>
          </div>
        `
      )
      .join("");

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Redis User Profiles</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            padding: 40px;
          }
          h1 {
            text-align: center;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }
          .card {
            background: white;
            padding: 20px;
            width: 250px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <h1>User Profiles</h1>
        <div class="container">
          ${cards || "<p>No users found</p>"}
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send("Failed to display users");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});