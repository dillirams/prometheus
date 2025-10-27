import client from 'prom-client';
const requestCounter = new client.Counter({
    name: "http_requests_total",
    help: "total number of http request",
    labelNames: ['method', 'route', 'status_code']
});
export function middleware(req, res, next) {
    const startTime = Date.now();
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
    });
    next();
}
//# sourceMappingURL=middleware.js.map