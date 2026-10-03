import express from "express";
import Redis from "ioredis";

const app = express();
const port = 3000;

const redis = new Redis(
  process.env.REDIS_URL || "redis://localhost:6379"
);

app.use(express.json());

function otpKey(phoneNumber) {
  return `otp:${phoneNumber}`;
}

app.post("/send-otp", async (req, res) => {
  const { phoneNumber } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await redis.set(otpKey(phoneNumber), otp, "EX", 60);

  res.json({
    message: `OTP sent to ${phoneNumber}`,
    otp
  });
});

app.post("/verify-otp", async (req, res) => {
  const { phoneNumber, otp } = req.body;

  const storedOtp = await redis.get(otpKey(phoneNumber));

  if (storedOtp === otp) {
    await redis.del(otpKey(phoneNumber));

    res.json({
      message: "OTP verified successfully"
    });
  } else {
    res.status(400).json({
      error: "Invalid OTP"
    });
  }
});

app.get("/check-otp", async (req, res) => {
  const { phoneNumber } = req.query;

  const key = otpKey(phoneNumber);

  const storedOtp = await redis.get(key);
  const ttl = await redis.ttl(key);

  if (storedOtp) {
    res.json({
      phoneNumber,
      storedOtp,
      ttl
    });
  } else {
    res.json({
      phoneNumber,
      storedOtp: null,
      ttl: -2
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});