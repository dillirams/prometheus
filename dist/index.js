import express from 'express';
import { middleware } from './middleware.js';
import client from 'prom-client';
const app = express();
app.use(express.json());
app.use(middleware);
app.get("/user", (req, res) => {
    console.log("the request received");
    res.status(200).json({
        message: "request received and respond successfully"
    });
});
app.get("/cpu", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
        let adder = Math.floor(Math.random() * 10);
        sum = sum + adder;
    }
    console.log(sum);
    res.status(200).json({
        sum: sum
    });
});
app.get('/metrics', async (req, res) => {
    try {
        res.set('Content-Type', client.register.contentType);
        const metrics = await client.register.metrics();
        res.send(metrics);
    }
    catch (err) {
        res.status(500).send('Error collecting metrics');
    }
});
app.listen(3000, () => {
    console.log("the app is listening to port 3000");
});
//# sourceMappingURL=index.js.map