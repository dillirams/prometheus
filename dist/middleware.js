import client from 'prom-client';
const requestCounter = new client.Counter({
    name: "http_requests_total",
    help: "total number of http request",
    labelNames: ['method', 'route', 'status_code']
});
const activeRequestGauge = new client.Gauge({
    name: "active_request",
    help: "active request help"
});
const httpRequestDuration = new client.Histogram({
    name: "http_request_duration_in_ms",
    help: "http_duration_helper_duration",
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 1, 5, 15, 50, 100, 500, 1000, 1500, 2000]
});
export function middleware(req, res, next) {
    const startTime = Date.now();
    activeRequestGauge.inc();
    const routePath = req.route && req.route.path ? req.route.path : req.originalUrl;
    const statusCode = res.statusCode ? res.statusCode.toString() : "unknown";
    res.on('finish', () => {
        const finishTime = Date.now();
        const requestTime = finishTime - startTime;
        console.log(`the request took ${requestTime} ms  for the method ${req.method} for the route ${req.route.path}`);
        requestCounter.inc({
            method: req.method,
            route: routePath,
            status_code: statusCode
        });
        activeRequestGauge.dec();
        httpRequestDuration.observe({
            method: req.method,
            route: routePath,
            status_code: statusCode
        }, finishTime - startTime);
    });
    next();
}
//# sourceMappingURL=middleware.js.map