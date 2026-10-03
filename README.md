# ⚡ Redis Learning Journey

<p align="center">
  <img src="https://img.shields.io/badge/Redis-Learning%20Journey-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Backend%20Practice-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/ioredis-Redis%20Client-DC382D?style=for-the-badge" />
  <img src="https://img.shields.io/badge/BullMQ-Job%20Queues-111111?style=for-the-badge" />
</p>

<p align="center">
  <strong>A practical, example-driven Redis learning repository for understanding how Redis solves real backend problems.</strong>
</p>

<p align="center">
  <em>Learn the problem → understand the Redis primitive → implement it → compare alternatives → build the mental model.</em>
</p>

---

## 🧭 What This Repository Is

This is my **personal Redis learning handbook**.

The goal is not to collect Redis commands.

The goal is to understand:

```text
                 BACKEND PROBLEM
                        │
                        ▼
               ┌─────────────────┐
               │  What kind of   │
               │  problem is it? │
               └────────┬────────┘
                        │
                        ▼
              Choose Redis Feature
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       String         Hash          List
          │             │             │
          ▼             ▼             ▼
       Cache         Object         Queue
                        │
                        ▼
                 Higher Patterns
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       BullMQ        Pub/Sub        Streams
```

The repository is intentionally written for **learning and revision**, not just documentation.

Every major topic should answer:

> **What is it? → Why is it used? → How does it work? → When should I use it?**

---

# 🧠 Redis in One Mental Model

## What is Redis?

**Redis** is an in-memory data structure store commonly used for:

* ⚡ Caching
* 🔐 Sessions
* ⏳ Temporary data
* 🚦 Rate limiting
* 📬 Background jobs
* 📡 Real-time communication
* 🏆 Leaderboards
* 🔢 Counters
* 🔄 Distributed coordination

The important understanding is not:

> ❌ Redis is fast.

Instead:

> ✅ **Redis is a fast data layer built around useful data structures and atomic operations.**

---

# ⚡ Why Is Redis Fast?

A simplified traditional database path:

```text
Application
     │
     ▼
Database
     │
     ▼
Storage
     │
     ▼
Disk / SSD
```

Redis primarily works with memory:

```text
Application
     │
     ▼
 Redis Client
     │
     ▼
   Redis
     │
     ▼
    RAM
```

This allows Redis to provide extremely low-latency access for many workloads.

### But remember

Redis does **not automatically replace** your primary database.

A useful architecture is:

```text
             APPLICATION
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
      Redis              Database
        │                   │
        │                   │
   Fast / temporary      Durable /
   / coordination        persistent
```

### 🧠 Mental shortcut

> **Database = durable truth**
> **Redis = fast access + temporary state + coordination**

---

# 🎯 The Redis Problem Map

Instead of memorizing commands, classify the problem.

```text
                         Redis
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
      DATA             TEMPORARY          COORDINATION
        │                  │                  │
   ┌────┼────┐             │             ┌────┼────┐
   ▼    ▼    ▼             ▼             ▼    ▼    ▼
String Hash List           TTL          Queue Pub/Sub Streams
   │    │    │             │             │
   ▼    ▼    ▼             ▼             ▼
Cache Object Ordered     Expiry       Background / Events
```

This map is more important than memorizing individual commands.

---

# 🗺️ Learning Roadmap

```text
LEVEL 01 — FOUNDATIONS
│
├── Redis architecture
├── Redis server / client
├── Key → Value
├── Strings
└── TTL / Expiration
        │
        ▼
LEVEL 02 — DATA STRUCTURES
│
├── Hashes
├── Lists
├── Sets
└── Sorted Sets
        │
        ▼
LEVEL 03 — BACKEND PATTERNS
│
├── Caching
├── Sessions
├── Rate Limiting
├── Counters
└── Temporary State
        │
        ▼
LEVEL 04 — ASYNC SYSTEMS
│
├── Lists as queues
├── Producer / Consumer
├── BullMQ
├── Workers
└── Retry / Delayed Jobs
        │
        ▼
LEVEL 05 — REAL-TIME SYSTEMS
│
├── Pub/Sub
├── Channels
├── Event broadcasting
└── Presence / notifications
        │
        ▼
LEVEL 06 — ADVANCED REDIS
│
├── Transactions
├── Pipelines
├── Lua / atomic operations
├── Streams
├── Distributed locks
└── Rate-limiting algorithms
        │
        ▼
LEVEL 07 — PRODUCTION REDIS
│
├── Persistence
├── Replication
├── Sentinel
├── Cluster
├── Memory management
└── Observability
```

---

# 📊 Learning Progress

| Level               | Topic             | Status |
| ------------------- | ----------------- | :----: |
| 🟢 Foundation       | Redis setup       |    ✅   |
| 🟢 Foundation       | Strings           |    ✅   |
| 🟢 Foundation       | TTL               |    ✅   |
| 🟢 Foundation       | JSON storage      |    ✅   |
| 🟢 Data Structures  | Hashes            |    ✅   |
| 🟢 Data Structures  | Lists             |    ✅   |
| 🟡 Backend Patterns | Caching           |   🔄   |
| 🟡 Backend Patterns | Sessions          |   🔜   |
| 🟡 Backend Patterns | Rate Limiting     |   🔜   |
| 🟢 Async Systems    | Basic Queue       |    ✅   |
| 🟢 Async Systems    | BullMQ            |    ✅   |
| 🟢 Real-Time        | Pub/Sub           |    ✅   |
| 🔵 Advanced         | Sets              |   🔜   |
| 🔵 Advanced         | Sorted Sets       |   🔜   |
| 🔵 Advanced         | Streams           |   🔜   |
| 🔵 Advanced         | Transactions      |   🔜   |
| 🔵 Advanced         | Distributed Locks |   🔜   |
| 🔴 Production       | Persistence       |   🔜   |
| 🔴 Production       | Replication       |   🔜   |
| 🔴 Production       | Sentinel          |   🔜   |
| 🔴 Production       | Cluster           |   🔜   |

> **Legend:** ✅ Learned · 🔄 Practicing · 🔜 Planned

---

# 🛠️ 01 — Redis Setup

## Run Redis with Docker

```bash
docker run --name redis -p 6379:6379 -d redis
```

Check the container:

```bash
docker ps
```

Test Redis:

```bash
docker exec -it redis redis-cli ping
```

Expected:

```text
PONG
```

---

## 🔌 Connect from Node.js

Using `ioredis`:

```javascript
import Redis from "ioredis";

const redis = new Redis({
  host: "localhost",
  port: 6379
});
```

Architecture:

```text
Node.js Application
        │
        ▼
     ioredis
        │
        ▼
localhost:6379
        │
        ▼
      Redis
```

### Important distinction

```text
ioredis
   │
   └── Node.js client

Redis
   │
   └── Actual server
```

---

# 🔑 02 — Redis Fundamentals

Redis fundamentally revolves around:

```text
KEY → VALUE
```

Example:

```redis
SET name "Deepak"
GET name
DEL name
```

Lifecycle:

```text
SET
 │
 ▼
STORE
 │
 ▼
GET
 │
 ▼
READ
 │
 ▼
DEL
 │
 ▼
REMOVE
```

---

## 🏷️ Key Naming

Avoid meaningless keys:

```text
101
```

Prefer predictable namespaces:

```text
user:101
```

Examples:

```text
user:101
session:abc123
otp:user101
cart:user101
cache:products
rate-limit:192.168.1.10
```

### 🧠 Key-design principle

> **A good Redis key tells you what the data represents before you inspect the value.**

---

# ⏳ 03 — TTL and Expiration

Redis can automatically remove data after a specified period.

Example:

```redis
SET otp:user101 "483921" EX 300
```

Meaning:

```text
otp:user101
      │
      ├── Value → 483921
      │
      └── TTL   → 300 seconds
```

Check TTL:

```redis
TTL otp:user101
```

Visual model:

```text
SET OTP
   │
   ▼
EX 300
   │
   ▼
5 minutes
   │
   ▼
Redis automatically expires it
```

### Great use cases

* 🔐 OTPs
* 🔑 Temporary tokens
* 🛒 Temporary carts
* ⚡ Cached responses
* 👤 Sessions
* 🔄 Temporary locks

### 🧠 Remember

> **TTL answers one question: “How long should this data live?”**

---

# 👤 04 — Storing Objects

There are two important approaches explored here.

## Option A — JSON String

```javascript
await redis.set(
  `user:${id}`,
  JSON.stringify({
    name,
    email
  })
);
```

Read:

```javascript
const user = await redis.get(`user:${id}`);
const data = JSON.parse(user);
```

Mental model:

```text
JavaScript Object
       │
       ▼
JSON.stringify()
       │
       ▼
Redis String
       │
       ▼
JSON.parse()
       │
       ▼
JavaScript Object
```

### Good when

The application normally wants the **entire object**.

---

# 🧩 05 — Redis Hashes

A Hash represents an object as individual fields.

```redis
HSET user:101 name "Deepak"
HSET user:101 email "deepak@gmail.com"
HSET user:101 age 21
```

Visual model:

```text
user:101
│
├── name  → Deepak
├── email → deepak@gmail.com
└── age   → 21
```

Update one field:

```redis
HSET user:101 email "new@gmail.com"
```

---

## ⚔️ JSON vs Hash

|                        | JSON String     | Redis Hash        |
| ---------------------- | --------------- | ----------------- |
| Model                  | Whole object    | Individual fields |
| Read                   | Whole value     | Individual fields |
| Update one field       | Rewrite object  | Update field      |
| JavaScript simplicity  | ⭐⭐⭐⭐⭐           | ⭐⭐⭐⭐              |
| Field-level operations | ⭐⭐              | ⭐⭐⭐⭐⭐             |
| Best mental model      | 📦 Whole object | 🧩 Object fields  |

### 🧠 Golden Rule

> **JSON → “Give me the object.”**
> **Hash → “Give me the fields.”**

---

# 📋 06 — Redis Lists

A List is an **ordered collection**.

```text
LEFT                         RIGHT
 ↓                             ↓

[ Job C ] [ Job B ] [ Job A ]

 ↑                             ↑
LPUSH                         RPOP
```

Example:

```redis
LPUSH emails "Job A"
RPOP emails
```

This creates a simple FIFO queue.

```text
Job A
  ↓
Job B
  ↓
Job C

First In → First Out
```

### 🧠 Remember

> **List = ordered data**
> **LPUSH + RPOP = simple FIFO queue**

---

# 📬 07 — Producer → Queue → Consumer

This is one of the most important backend patterns in this repository.

```text
                PRODUCER
                   │
                   │ creates work
                   ▼
            ┌─────────────┐
            │ Redis Queue │
            └──────┬──────┘
                   │
                   │ takes work
                   ▼
                CONSUMER
                   │
                   ▼
             Process Job
```

### Real backend example

```text
POST /welcome-email
        │
        ▼
Create email job
        │
        ▼
Redis Queue
        │
        ▼
Background Worker
        │
        ▼
Send Email
```

Without a queue:

```text
User
 │
 ▼
API
 │
 ▼
Send Email
 │
 ▼
Wait
 │
 ▼
Response
```

With a queue:

```text
User
 │
 ▼
API
 │
 ▼
Queue Job
 │
 ▼
Fast Response

       ...later...

Queue
 │
 ▼
Worker
 │
 ▼
Send Email
```

### 🧠 Core principle

> **Producer creates work. Queue stores work. Consumer processes work.**

---

# 🐂 08 — BullMQ

BullMQ is a Node.js job queue library built around Redis.

A manual queue might require:

```text
LPUSH
RPOP
Workers
Retries
Failure handling
Job state
Scheduling
Concurrency
```

BullMQ provides higher-level abstractions for these concerns.

```text
Producer
   │
   ▼
BullMQ Queue
   │
   ▼
 Redis
   │
   ▼
 Worker
   │
   ▼
Process Job
```

Add a job:

```javascript
await queue.add("sendEmail", {
  email: "user@gmail.com"
});
```

Worker:

```javascript
new Worker("emailQueue", async (job) => {
  console.log(job.data.email);
});
```

### Why BullMQ?

Production background processing often needs:

* 🔁 Retries
* ⏰ Delayed jobs
* 📊 Job states
* ⚙️ Concurrency
* ❌ Failed-job handling
* 👷 Workers

### Common use cases

```text
📧 Email processing
🔔 Notifications
🖼️ Image processing
🎥 Video processing
📊 Report generation
💳 Background operations
🔄 Retryable tasks
⏰ Scheduled jobs
```

### 🧠 Important distinction

> **Redis List → learn how a queue works.**
> **BullMQ → build a richer job-processing system.**

---

# 📡 09 — Redis Pub/Sub

Pub/Sub solves a different problem.

Instead of:

> “Someone needs to process this job.”

Pub/Sub means:

> **“Something happened. Tell everyone who is listening.”**

Architecture:

```text
                 Publisher
                     │
                     ▼
              ┌─────────────┐
              │ Redis       │
              │ Channel     │
              └──────┬──────┘
                     │
             ┌───────┴───────┐
             ▼               ▼
       Subscriber A    Subscriber B
```

Publish:

```javascript
await publisher.publish(
  "message",
  "Hello Redis"
);
```

Subscribe:

```javascript
await subscriber.subscribe("message");

subscriber.on("message", (channel, message) => {
  console.log(message);
});
```

---

## 🌐 Real-world example

Suppose an order is created:

```text
Order Created
      │
      ▼
Publish "order-created"
      │
      ▼
 Redis Channel
      │
 ┌────┼──────────────┐
 ▼    ▼              ▼
Web  Notification  Analytics
```

Possible uses:

* 💬 Chat
* 🔔 Notifications
* 📊 Live dashboards
* 🎮 Multiplayer events
* 🟢 Presence updates
* 🔄 Service communication

---

# ⚠️ 10 — Pub/Sub's Important Limitation

Pub/Sub is designed for **real-time delivery**, not durable message storage.

If a subscriber is offline:

```text
Publisher
    │
    ▼
 Redis
    │
    ▼
Subscriber
    ✕
  offline
```

The subscriber can miss the message.

This creates an important distinction:

```text
Need real-time broadcast?
        │
        ▼
     Pub/Sub

Need background work?
        │
        ▼
   Queue / BullMQ

Need durable event history?
        │
        ▼
    Redis Streams
```

### 🧠 Remember

> **Pub/Sub = “Something happened.”**
> **Queue = “Someone needs to do something.”**
> **Streams = “Keep the event history.”**

---

# ⚔️ 11 — Queue vs BullMQ vs Pub/Sub vs Streams

| Feature          | Redis List |             BullMQ | Pub/Sub | Streams |
| ---------------- | ---------: | -----------------: | ------: | ------: |
| Basic queue      |          ✅ |                  ✅ |       ❌ |       ✅ |
| Background jobs  |         ⚠️ |              ⭐⭐⭐⭐⭐ |       ❌ |    ⭐⭐⭐⭐ |
| Retries          |     Manual |                  ✅ |       ❌ |  Manual |
| Delayed jobs     |     Manual |                  ✅ |       ❌ |  Manual |
| Job states       |     Manual |                  ✅ |       ❌ |       ❌ |
| Broadcast        |          ❌ |                  ❌ |       ✅ |       ❌ |
| Durable messages |    Limited |          Job-based |       ❌ |       ✅ |
| Consumer groups  |          ❌ | BullMQ abstraction |       ❌ |       ✅ |
| Event history    |          ❌ |                  ❌ |       ❌ |       ✅ |

### 🎯 Decision rule

```text
                  What is the problem?
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
      DO WORK          BROADCAST         KEEP EVENTS
          │                │                │
          ▼                ▼                ▼
       Queue            Pub/Sub          Streams
          │
          ▼
       BullMQ
```

---

# 🏗️ 12 — How Redis Fits Into a Real Backend

Redis becomes much more useful when viewed as part of a larger architecture.

```text
                         CLIENT
                           │
                           ▼
                    ┌────────────┐
                    │  Backend   │
                    │ Node/FastAPI│
                    └─────┬──────┘
                          │
          ┌───────────────┼────────────────┐
          │               │                │
          ▼               ▼                ▼
       Redis            BullMQ           Pub/Sub
       Cache             Jobs             Events
          │               │                │
          ▼               ▼                ▼
      Fast Reads      Background       Real-Time
                      Processing       Updates
          │
          ▼
   PostgreSQL / MongoDB
```

---

# 🛒 Example — E-Commerce Architecture

```text
                    E-COMMERCE BACKEND
                           │
       ┌───────────────────┼────────────────────┐
       │                   │                    │
       ▼                   ▼                    ▼
    Redis               Database             BullMQ
       │                   │                    │
       ├── Cache           ├── Users            ├── Email
       ├── Session         ├── Products         ├── Reports
       ├── Cart            ├── Orders           └── Processing
       ├── OTP             └── Payments
       └── Rate Limit
```

The important lesson:

> **Do not add Redis because a project is “modern.” Add Redis because a specific problem requires it.**

---

# 🚀 13 — Caching

Caching is one of Redis's most important backend applications.

Imagine:

```text
Client
  │
  ▼
API
  │
  ▼
Database
```

Every repeated request hits the database.

With caching:

```text
Client
  │
  ▼
API
  │
  ▼
Redis Cache
  │
  ├── HIT ──────► Return data
  │
  └── MISS
       │
       ▼
    Database
       │
       ▼
   Store in Redis
       │
       ▼
   Return data
```

This pattern is commonly called:

> **Cache-Aside**

### 🧠 Cache decision

Use caching when:

```text
Data is requested frequently
        +
Data is expensive to retrieve
        +
Data can tolerate some staleness
```

---

# 🚦 14 — Rate Limiting

Redis is useful for tracking request counts.

Conceptually:

```text
User
 │
 ▼
API Request
 │
 ▼
Redis Counter
 │
 ├── Under limit → Allow
 │
 └── Over limit  → Reject
```

Example mental model:

```text
rate-limit:user101
        │
        ▼
      count
        │
        ▼
     TTL window
```

This is especially useful for:

* Login attempts
* OTP endpoints
* Public APIs
* Expensive endpoints
* Abuse prevention

---

# 🔐 15 — Sessions and Temporary Authentication State

Redis can store session information:

```text
Browser
   │
   ▼
Session ID
   │
   ▼
Redis
   │
   ▼
User Session
```

Example:

```text
session:abc123
      │
      ├── userId
      ├── role
      └── expiration
```

The database continues to hold durable user information.

Redis manages fast temporary session state.

---

# 🧪 16 — Practical Experiments

The best way to learn Redis is to connect concepts to actual backend problems.

## Experiment 01 — User Profile

```text
POST /user
      │
      ▼
Store in Redis
      │
      ▼
GET /user/:id
      │
      ▼
Read from Redis
```

Learn:

* Strings
* JSON
* Keys
* Serialization
* Deserialization

---

## Experiment 02 — Email Queue

```text
POST /welcome-email
        │
        ▼
    Redis List
        │
        ▼
GET /process-emails
        │
        ▼
    Process Job
```

Learn:

* Lists
* LPUSH
* RPOP
* FIFO
* Producer / Consumer

---

## Experiment 03 — BullMQ

```text
API
 │
 ▼
Queue.add()
 │
 ▼
BullMQ
 │
 ▼
Redis
 │
 ▼
Worker
```

Learn:

* Jobs
* Queues
* Workers
* Retry concepts
* Background processing

---

## Experiment 04 — Pub/Sub

```text
Publisher
    │
    ▼
 Channel
    │
 ┌──┴──┐
 ▼     ▼
Sub A Sub B
```

Learn:

* Channels
* Publishers
* Subscribers
* Real-time communication
* Separate Redis connections

---

# 🧠 17 — Redis Data Structures

Redis becomes powerful because it is not just:

```text
Key → String
```

It provides multiple data structures.

| Structure  | Think Of It As        | Common Use            |
| ---------- | --------------------- | --------------------- |
| String     | 📦 Value              | Cache, token, counter |
| Hash       | 👤 Object             | User/session data     |
| List       | 📋 Ordered collection | Queue                 |
| Set        | 🧩 Unique collection  | Tags, membership      |
| Sorted Set | 🏆 Ranked collection  | Leaderboards          |
| Stream     | 📜 Event log          | Event processing      |

### Mental map

```text
String
  ↓
Simple value

Hash
  ↓
Object fields

List
  ↓
Ordered items

Set
  ↓
Unique items

Sorted Set
  ↓
Ranked items

Stream
  ↓
Event history
```

---

# 🔬 18 — Understanding Redis Through Operations

Don't just memorize:

```text
SET
GET
HSET
LPUSH
RPOP
```

Ask what operation your application needs.

```text
Need a simple value?
        ↓
      String

Need one field?
        ↓
      Hash

Need ordered items?
        ↓
      List

Need uniqueness?
        ↓
       Set

Need ranking?
        ↓
   Sorted Set

Need event history?
        ↓
     Stream
```

This is the real Redis skill:

> **Problem → Data structure → Operation**

---

# ⚙️ 19 — Atomic Operations

One important Redis property is that many individual commands are atomic.

For example:

```redis
INCR requests:user101
```

Conceptually:

```text
Read count
   ↓
Increment
   ↓
Write count
```

Redis handles the command atomically.

This makes Redis useful for:

* Counters
* Rate limiting
* Sequence numbers
* Metrics
* Coordination

### 🧠 Think

> **Atomic operation = the operation happens as one indivisible action.**

---

# 🔄 20 — Transactions and Pipelines

These are different concepts and should not be confused.

### Transactions

Useful when multiple Redis commands should be grouped.

```text
MULTI
  │
  ├── Command 1
  ├── Command 2
  └── Command 3
  │
 EXEC
```

### Pipelines

Useful when you want to reduce network round trips.

```text
Without pipeline:

App → Redis
App → Redis
App → Redis

With pipeline:

App ─────────► Redis
      commands
```

### 🧠 Remember

> **Transaction → command grouping / execution semantics**
> **Pipeline → communication efficiency**

---

# 📜 21 — Redis Streams

Streams solve a different problem from Pub/Sub.

Think:

> **“I want events to remain available so consumers can process them.”**

Conceptually:

```text
Producer
   │
   ▼
┌──────────────────────────────┐
│        Redis Stream          │
│                              │
│ event 1 → event 2 → event 3 │
└──────────────┬───────────────┘
               │
       ┌───────┴───────┐
       ▼               ▼
 Consumer A        Consumer B
```

### Pub/Sub vs Streams

```text
Pub/Sub
   ↓
Real-time delivery
   ↓
Missed message can be lost

Streams
   ↓
Persistent event entries
   ↓
Consumers can process later
```

### 🧠 Mental model

> **Pub/Sub = live radio**
> **Streams = recorded event log**

---

# 🔒 22 — Distributed Locks

Sometimes multiple application instances may attempt the same operation.

Example:

```text
Server A ──┐
           │
           ├──► Same resource
           │
Server B ──┘
```

A distributed lock can coordinate access:

```text
Server A
   │
   ▼
Acquire Lock
   │
   ▼
Perform Work
   │
   ▼
Release Lock
```

This becomes useful in distributed systems where multiple workers or servers may compete for the same resource.

---

# 🚨 23 — Common Mistakes

## ❌ Redis is only a cache

Redis can support:

```text
Cache
Sessions
Queues
Pub/Sub
Counters
Leaderboards
Rate Limiting
Streams
Locks
```

---

## ❌ BullMQ and Pub/Sub are the same

They are not.

```text
BullMQ
  ↓
Background job processing

Pub/Sub
  ↓
Real-time event broadcasting
```

---

## ❌ Redis automatically replaces the database

A common architecture is:

```text
Database
   ↓
Permanent data

Redis
   ↓
Fast / temporary / coordination data
```

---

## ❌ Every project needs Redis

Redis introduces additional:

* Infrastructure
* Memory usage
* Failure modes
* Operational complexity
* Data consistency considerations

Use it when it solves a real problem.

---

# ⚔️ 24 — Redis vs Database

| Requirement                      | Database | Redis |
| -------------------------------- | -------: | ----: |
| Durable source of truth          |    ⭐⭐⭐⭐⭐ |    ⭐⭐ |
| Very fast access                 |      ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Complex queries                  |    ⭐⭐⭐⭐⭐ |    ⭐⭐ |
| Temporary data                   |       ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Caching                          |       ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Background jobs                  |       ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Real-time messaging              |       ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Large persistent relational data |    ⭐⭐⭐⭐⭐ |     ⭐ |

### 🧠 Architecture principle

> **Don't ask “Redis or database?”**
> Ask **“What responsibility should each system own?”**

---

# 🏗️ 25 — The Backend Layer Mental Model

A useful way to think about modern backend infrastructure:

```text
                    APPLICATION
                         │
        ┌────────────────┼─────────────────┐
        │                │                 │
        ▼                ▼                 ▼
     DATABASE          REDIS             QUEUE
        │                │                 │
 Durable truth      Fast state         Background work
        │                │                 │
        │        ┌───────┼───────┐         │
        │        ▼       ▼       ▼         │
        │      Cache   Session  Events     │
        │                                  │
        └──────────────────────────────────┘
```

Each component has a responsibility.

That is more important than memorizing technology names.

---

# 🧭 26 — Fast Decision Framework

When starting a backend feature, ask:

```text
What kind of problem am I solving?
              │
              ▼
        ┌───────────────┐
        │ Simple value? │
        └───────┬───────┘
                ▼
             String

Object with fields?
        ↓
      Hash

Whole object?
        ↓
   JSON String

Ordered collection?
        ↓
       List

Unique collection?
        ↓
        Set

Ranking?
        ↓
   Sorted Set

Automatic expiration?
        ↓
        TTL

Frequently requested data?
        ↓
       Cache

Background work?
        ↓
    Queue / BullMQ

Real-time event?
        ↓
      Pub/Sub

Durable event history?
        ↓
      Streams

Cross-server coordination?
        ↓
 Distributed Lock
```

---

# 🧠 27 — One-Minute Redis Revision

```text
REDIS
│
├── ⚡ In-memory data layer
│
├── 🔑 STRING
│   └── Simple values / cache / counters
│
├── 👤 HASH
│   └── Object fields
│
├── 📋 LIST
│   └── Ordered data / basic queue
│
├── 🧩 SET
│   └── Unique values
│
├── 🏆 SORTED SET
│   └── Ranking / leaderboard
│
├── ⏳ TTL
│   └── Automatic expiration
│
├── 🐂 BULLMQ
│   └── Background jobs
│
├── 📡 PUB/SUB
│   └── Real-time events
│
├── 📜 STREAMS
│   └── Durable event history
│
└── 🔒 LOCKS
    └── Distributed coordination
```

---

# 🎯 28 — Redis Through Backend Problems

This is the most important revision section.

### “I need faster repeated reads.”

```text
Database
   ↓
Cache
   ↓
Redis
```

### “I need temporary data.”

```text
Redis
   +
TTL
```

### “I need to store an object.”

```text
Whole object
   ↓
JSON String

Field-level access
   ↓
Hash
```

### “I need background processing.”

```text
Producer
   ↓
Queue
   ↓
Worker
```

### “I need production-grade jobs.”

```text
BullMQ
```

### “I need real-time broadcasting.”

```text
Publisher
   ↓
Redis Channel
   ↓
Subscribers
```

### “I need event history.”

```text
Redis Streams
```

### “I need unique values.”

```text
Redis Set
```

### “I need ranking.”

```text
Sorted Set
```

---

# 🧪 29 — Practical Learning Philosophy

This repository follows a problem-first learning cycle:

```text
                 ┌──────────────┐
                 │ Understand   │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Find Problem │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Implement    │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Debug        │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Compare      │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Build Model  │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Revisit      │
                 └──────┬───────┘
                        │
                        └──────────► Improve
```

> **Understand the problem first. Redis is the tool.**

---

# 🗺️ 30 — The Next Learning Path

The next stage of this repository should move from **using Redis** to **designing Redis-backed systems**.

```text
CURRENT
  │
  ├── Strings
  ├── Hashes
  ├── Lists
  ├── TTL
  ├── Queues
  ├── BullMQ
  └── Pub/Sub
       │
       ▼
NEXT
  │
  ├── Sets
  ├── Sorted Sets
  ├── Cache-Aside
  ├── Rate Limiting
  ├── Sessions
  ├── Transactions
  ├── Pipelines
  └── Streams
       │
       ▼
ADVANCED
  │
  ├── Lua scripting
  ├── Distributed locks
  ├── Persistence
  ├── Replication
  ├── Sentinel
  ├── Cluster
  ├── Memory optimization
  └── Observability
       │
       ▼
PRODUCTION
  │
  ├── Failure handling
  ├── High availability
  ├── Scaling
  ├── Monitoring
  ├── Security
  └── Architecture decisions
```

---

# 📚 31 — Six-Month Revision Map

When returning to this repository months later, don't start by reading every command.

Start with the problem:

```text
Need FAST access?
        ↓
      Redis

Need TEMPORARY data?
        ↓
       TTL

Need an OBJECT?
        ↓
   JSON / Hash

Need ORDERED data?
        ↓
      List

Need UNIQUE data?
        ↓
       Set

Need RANKING?
        ↓
   Sorted Set

Need BACKGROUND WORK?
        ↓
   Queue / BullMQ

Need REAL-TIME EVENTS?
        ↓
      Pub/Sub

Need RELIABLE EVENT HISTORY?
        ↓
      Streams

Need DISTRIBUTED COORDINATION?
        ↓
       Locks
```

---

# 🧠 Final Mental Model

If I remember only one diagram from this repository, it should be this:

```text
                         REDIS
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
            DATA        TEMPORARY     MESSAGING
             │             │             │
       ┌─────┼─────┐       │       ┌─────┼─────┐
       ▼     ▼     ▼       ▼       ▼     ▼     ▼
    String Hash  List     TTL     Queue Pub/Sub Streams
       │     │     │                │
       ▼     ▼     ▼                ▼
    Values Object Queue          Backend Work
       │
       └──────────────┬─────────────────────┐
                      ▼                     ▼
                   Cache                 Sessions
                      │
                      ▼
                Fast Backend
```

---

# ⭐ The Real Goal

The goal of this repository is **not**:

```text
❌ Memorize Redis commands
```

It is:

```text
Backend Problem
      ↓
Understand the requirement
      ↓
Choose the right Redis data structure
      ↓
Choose the right Redis pattern
      ↓
Implement it
      ↓
Understand the trade-offs
      ↓
Know when Redis should NOT be used
```

> ### **The real Redis skill is not knowing `SET`, `GET`, or `HSET`.**
>
> ### **The real skill is seeing a backend problem and recognizing the Redis primitive or pattern that solves it.**

---

# 🚀 Repository Philosophy

```text
Learn
  ↓
Build
  ↓
Break
  ↓
Debug
  ↓
Understand
  ↓
Document
  ↓
Revisit
  ↓
Build something better
```

This repository will evolve from:

> **“Learning Redis commands”**

into:

> **“Understanding Redis as a backend infrastructure component.”**

---

## 👨‍💻 Author

**Deepak Yadav**

Computer Engineering Student
Backend / Full-Stack Development • Redis • Node.js • MongoDB • PostgreSQL

---

## 📄 License

This repository is maintained as a personal learning and experimentation resource.

---

<p align="center">
  <strong>⚡ Learn the problem. Choose the data structure. Build the system.</strong>
</p>

<p align="center">
  <sub>Redis Learning Journey • Built for understanding, experimentation, and revision.</sub>
</p>