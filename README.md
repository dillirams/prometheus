# 🚀 Express + Prometheus Metrics Integration

This project demonstrates how to integrate **Prometheus monitoring** into an **Express.js** application using the [`prom-client`](https://www.npmjs.com/package/prom-client) library.

---

## 📘 What is Prometheus?

**Prometheus** is an open-source monitoring and alerting toolkit designed for reliability and scalability.  
It collects metrics from applications and systems as **time-series data** — metrics are stored with timestamps, labels (like route, method, and status), and can later be queried or visualized using tools like **Grafana**.

Prometheus works by **scraping endpoints** (usually `/metrics`) exposed by applications.

## ⚙️ Installation

Install the Prometheus client for Node.js:


npm install prom-client.

📊 Metric Types in Prometheus

Prometheus provides several metric types to represent different kinds of data.
In this project, we mainly use Counter, Gauge, and Histogram.

🧮 Counter

A Counter is a cumulative metric that only increases over time.
It is typically used to count events such as the total number of requests, errors, or completed operations.

Example Use Cases:

Total number of HTTP requests.

Number of processed files.

Total errors encountered.

Characteristics:

Increases monotonically (resets to zero when the app restarts).

Represents event counts or totals.

⚖️ Gauge

A Gauge is a metric that represents a numerical value that can go up or down.
It’s useful for tracking fluctuating metrics like memory usage, CPU load, or number of active users.

Example Use Cases:

Current number of active users.

Current CPU or memory usage.

Size of a message queue.

Characteristics:

Can both increase and decrease.

Tracks the current value of something, not the total.

📈 Histogram

A Histogram samples observations (for example, request durations or payload sizes) and counts them into configurable buckets.
It helps you analyze distributions and performance metrics, such as latency.

Example Use Cases:

Measuring request durations (API latency).

Tracking payload or response sizes.

Monitoring performance percentiles (e.g., 95th, 99th).

Characteristics:

Records the distribution of values across predefined buckets.

Provides count, sum, and bucket breakdowns.

Ideal for latency and performance monitoring.

🧰 How It Works

The prom-client