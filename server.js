const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "services.html"));
});

app.get("/booking", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "booking.html"));
});

app.get("/clients", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "clients.html"));
});

app.post("/booking", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});
app.listen(PORT, () => {
    console.log(`Serwer działa: http://localhost:${PORT}`);
});
app.get("/booking", (req, res) => {
    res.sendFile(__dirname + "/views/booking.html");
});

console.log("Salon działa");