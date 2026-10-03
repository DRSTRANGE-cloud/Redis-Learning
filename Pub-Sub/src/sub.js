import Redis from "ioredis";

const subscriber = new Redis(
  process.env.REDIS_URL || "redis://localhost:6379"
);

subscriber.subscribe("message", (err, count) => {
  if (err) {
    console.error("Failed to subscribe:", err.message);
    return;
  }

  console.log("Subscribed to channel 'message'");
});

subscriber.on("message", (channel, message) => {
  console.log(
    `Received message from channel ${channel}: ${message}`
  );
});