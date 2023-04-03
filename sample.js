import Express from "express";

const app = Express();

// To handle JSON data in my request body
app.use(Express.json());

// localhost:8987/hello
app.get("/", (req, res) => {
    res.send("Hello from my server");
});

app.get("/json", (req, res) => {
    res.send({
        name: "Saurabh",
        skills: ["BTP", "UI5", "Python"]
    });
});

app.get("/json/:name/:city", (req, res) => {
    let name = req.params.name;
    let city = req.params.city;
    res.send({
        name: name,
        city: city,
        skills: ["BTP", "UI5", "Python"]
    });
});

app.post("/addUser", (req, res) => {
    let userData = req.body;

    userData.studentName = userData.studentName.toUpperCase();
    userData.studentClass = userData.studentClass + " class";

    // res.send(userData);
});

app.listen(8987, () => {
    console.log("Server listening on port 8987");
});