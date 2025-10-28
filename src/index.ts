import express from 'express'
import { middleware } from './middleware.js';
import client from 'prom-client'

const app= express();
app.use(express.json());
app.use(middleware)

app.get("/user",(req,res)=>{
     console.log("the request received");
     res.status(200).json({
        message:"request received and respond successfully"
     })
})

app.get("/cpu",async(req,res)=>{
    
    await new Promise((e)=>setTimeout(e,1000));
    res.status(200).json({
        name:"dilliram"
    })
})
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    const metrics = await client.register.metrics();
    res.send(metrics);
  } catch (err) {
    res.status(500).send('Error collecting metrics');
  }
});


app.listen(3000,()=>{
    console.log("the app is listening to port 3000")
})