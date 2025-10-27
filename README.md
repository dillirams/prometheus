# 🚀 Express + Prometheus Metrics Integration

This project demonstrates how to integrate **Prometheus monitoring** into an **Express.js** application using the [`prom-client`](https://www.npmjs.com/package/prom-client) library.

---

## 📘 What is Prometheus?

**Prometheus** is an open-source monitoring and alerting toolkit designed for reliability and scalability.  
It collects metrics from applications and systems as **time-series data** — metrics are stored with timestamps, labels (like route, method, and status), and can later be queried or visualized using tools like **Grafana**.

Prometheus works by **scraping endpoints** (usually `/metrics`) exposed by applications.

install prometheus client:
npm install npm i prom-client
