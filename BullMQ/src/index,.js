import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import express from 'express';

const connection = new IORedis({ maxRetriesPerRequest: null });

const worker = new Worker(
  'foo',
  async job => {
    console.log(job.data);
  },
  { connection },
);