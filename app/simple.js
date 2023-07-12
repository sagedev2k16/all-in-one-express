// Import express from express package
import Express from "express";

// Create a new express app
const app = Express();

// Get PORT number from env. Else default to 8887
const PORT = process.env.PORT || 8887;

// Tells the express app that we are expecting JSON data
app.use(Express.json());

// GET endpoint to handle requests coming on "/"
app.get("/", (req, res) => {
    res.send({
        name: "Saurabh",
        employeeId: "123456",
        city: "Delhi",
        country: "India"
    });
});

app.post("/data", (req, res) => {
    let jsonData = req.body;

    if(jsonData.time && jsonData.name) {
        res.send(`Good ${jsonData.time}, ${jsonData.name}`);
    } else {
        res.send("Time and name properties are required");
    }
});

// Start listening to incoming requests
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});