import Express from "express";
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import axios from 'axios';
import passport from "passport";
import { JWTStrategy } from "@sap/xssec";
import jwt_decode from 'jwt-decode';
import { getServices } from "@sap/xsenv";

import { initDb } from "./utils.js";
import { checkPerformScope, checkReadScope } from "./utils.js";

await initDb();

// Express routers
import localRoutes from "./local-routes.js";
import dbRoutes from "./db-routes.js";

let season = process.env.SEASON || "";

// Create an express app
const app = Express();

// Parse incoming JSON request body
app.use(Express.json());

// Use public/dist folder to serve static content
app.use(
    Express.static( // Tells express where to serve the static files from
        path.join("public", "dist") // Use path module to create a path to the static files folder
    )
);

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

app.get("/env", (req, res) => {
    res.send(process.env);
});

app.get("/seasons", (req, res) => {
    if(season) {
        switch (season) {
            case "summer":
                res.send("It is too hot. Turn on the AC.");
                break;

            case "rains":
                res.send("It is raining. Get an umbrella.");
                break;

            case "winter":
                res.send("It is too cold outside. Turn on the heater.");
                break;
            default:
                res.send("Provide a SEASON env var");
                break;
        }
    } else {
        res.send("Provide a SEASON env var");
    }
});

if(process.env.NODE_ENV === "production") { // this checks if we are running on BTP
    // ----- authentication code start -----
    passport.use(new JWTStrategy(getServices({uaa: {tag: "xsuaa"}}).uaa));

    app.use(passport.initialize());
    app.use(passport.authenticate('JWT', {session: false}));
    // ----- authentication code end -----
}

// Express middleware
app.use("*", (req, res, next) => {
    console.log("Got new request", req.method, req.originalUrl);
    next();
});

app.get("/auth", (req, res) => {
    // console.log(JSON.stringify(req));
    res.send({
        user: req.user,
        appToken: req.authInfo.getAppToken(),
        tokenDecode: jwt_decode(req.authInfo.getAppToken())
    });
});

// Simple REST API calls
app.get("/", (req, res) => {
    res.send("Hello from server");
});

app.get("/date", checkReadScope, (req, res) => {
    res.send("Current time is: " + new Date());
});

app.use("/local", localRoutes);
app.use("/db", checkPerformScope, dbRoutes);

app.listen(PORT, () => {
    console.log("Server listening on port - " + PORT);
});