import Express from "express";

// Create an express app
const app = Express();

// define a port for web server
const PORT = process.env.PORT || 8789;

app.get("/hello", (req, res) => {
    res.send("Hello from server");
});

app.get("/date", (req, res) => {
    res.send(new Date().toLocaleString());
});

app.post("/postData", (req, res) => {
    res.send("Got data");
});

// Start listening to incoming requests
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});