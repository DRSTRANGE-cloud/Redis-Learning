import { Queue } from "bullmq";

 const connection = {
    host: 'localhost',
    port: 6739,
 };

 const emailQueue = new Queue('emails', { connection });

module.exports = {
    emailQueue,
    connection,
};