# AI-Powered Worker Productivity Dashboard

##  Overview

This project is a full-stack web application designed to track and visualize worker productivity in a manufacturing setup using structured event data generated from AI-powered CCTV systems.

It processes worker activity events and converts them into meaningful productivity metrics displayed via an interactive dashboard.

---

##  Architecture Overview

### 🔹 Frontend

* Built using **React.js**
* Handles UI rendering, charts, and data visualization
* Fetches data from backend APIs

### 🔹 Backend

* Built using **Node.js + Express.js**
* Exposes REST APIs to process and serve productivity metrics
* Handles business logic and data aggregation

### 🔹 Database

* **MongoDB**
* Stores worker events, workstation data, and computed metrics

### 🔹 Deployment

* Frontend → Vercel
* Backend → Render

---

##  Database Schema

### 1. Workers Collection

```json
{
  "_id": "workerId",
  "name": "Worker A",
  "workstationId": "ws1"
}
```

### 2. Workstations Collection

```json
{
  "_id": "ws1",
  "name": "Assembly Line 1"
}
```

### 3. Events Collection

```json
{
  "_id": "eventId",
  "workerId": "workerId",
  "workstationId": "ws1",
  "eventType": "WORKING | IDLE | BREAK",
  "timestamp": "2026-04-26T10:00:00Z"
}
```

---

##  Metric Definitions

### 1.  Total Working Time

Total duration when worker is in `WORKING` state.

### 2.  Idle Time

Time when worker is present but not working.

### 3.  Break Time

Time spent on breaks.

### 4.  Productivity Score

```text
Productivity = (Working Time / Total Time) * 100
```

### 5.  Workstation Utilization

```text
Utilization = (Active Time / Total Available Time) * 100
```

---

## Assumptions & Tradeoffs

### Assumptions

* Each worker is assigned to one workstation
* Events are received in chronological order
* No overlapping events for a single worker
* Fixed number of workers and workstations (as per assignment)

### Tradeoffs

*  Real-time streaming not implemented (batch processing instead)
*  No authentication for simplicity
*  Data is assumed clean (no missing/corrupt events handling)

---

##  Theoretical Questions

### 1. How would you scale this system to 10,000 workers?

* Use **message queues (Kafka/RabbitMQ)** for event ingestion
* Implement **stream processing (Apache Kafka Streams / Spark)**
* Use **horizontal scaling** with load balancers
* Store data in **sharded databases**

---

### 2. How would you handle real-time updates?

* Use **WebSockets (Socket.io)**
* Or **Server-Sent Events (SSE)**
* Push live updates to frontend dashboard

---

### 3. How would you ensure data accuracy?

* Event validation at ingestion layer
* Deduplication using unique event IDs
* Time synchronization using server timestamps
* Retry mechanisms for failed events

---

### 4. How would you optimize performance?

* Indexing in MongoDB
* Caching using Redis
* Aggregation pipelines for metrics
* Pagination and lazy loading in frontend

---

## Getting Started

### Clone the repo

```bash
git clone https://github.com/arpitbansal421/workstation.git
cd workstation
```

### Install dependencies

#### Frontend

```bash
cd workstationfrontend
npm install
npm start
```

#### Backend

```bash
cd backend
npm install
npm run dev
```

---

## Live Links

* Frontend: https://workstation-chi.vercel.app
* Backend: https://workstation-zo05.onrender.com

---

---
