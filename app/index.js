import Express from "express";
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import axios from 'axios';

import { initDb } from "./utils.js";

await initDb();

// Express routers
import localRoutes from "./local-routes.js";
import dbRoutes from "./db-routes.js";

// Create an express app
const app = Express();

// Parse incoming JSON request body
app.use(Express.json());

// Use public/dist folder to serve static content
app.use(Express.static(path.join("public", "dist")));

// Allow cors requests
app.use(cors());

// Safeguard application with helmet
app.use(helmet());

// Use the PORT exposed by environment. If PORT not defined in env, then use 8775
const PORT = process.env.PORT || 8775;

// Using axios with express
app.get("/apiData", async (req, res) => {
    let apiResponse;
    
    try {
        apiResponse = await axios.get("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json", {
            headers: {
                'Accept': 'application/json'
            }
        });
    
        res.send(apiResponse.data);
    } catch(e) {
        res.send({
            msg: "Error occurred",
            error: e
        });
    }
});

// Express middleware
app.use("*", (req, res, next) => {
    console.log("Got new request", req.method, req.originalUrl);
    next();
});

// Simple REST API calls
app.get("/", (req, res) => {
    res.send("Hello from server");
});

app.get("/date", (req, res) => {
    res.send("Current time is: " + new Date());
});

app.use("/local", localRoutes);
app.use("/db", dbRoutes);

app.listen(PORT, () => {
    console.log("Server listening on port - " + PORT);
});