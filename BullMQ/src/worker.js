import { worker } from "bullmq";
import Redis from "ioredis";
import express from "express";
import { Connection } from "./queue.js";

const worker = new Worker(
  "emails",
  async (job) => {
    console.log("Processing job:", job.id);
    console.log(job.data);
    console.log("Job completed");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
  { connection: Connection },
);
worker.on("completed", (job) => {
  console.log(`Job ${job.id} has been completed`);
});
worker.on("failed", (job, err) => {
  console.log(`Job ${job.id} has failed with error: ${err.message}`);
});
