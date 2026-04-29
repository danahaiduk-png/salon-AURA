const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// 📦 rezerwacje
let reservations = [];

// 🔐 admin login
let isAdmin = false;

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

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "admin.html"));
});

// 📅 zapis rezerwacji
app.post("/reserve", (req, res) => {
    const { date, time } = req.body;

    // 🔥 blokada tej samej daty + godziny
    const exists = reservations.find(
        r => r.date === date && r.time === time
    );

    if (exists) {
        return res.status(400).json({ message: "Termin zajęty" });
    }

    reservations.push(req.body);

    res.json({ ok: true });
});

// 🔐 login admina
app.post("/admin-login", (req, res) => {
    const { login, password } = req.body;

    if (login === "admin" && password === "1234") {
        isAdmin = true;
        return res.json({ success: true });
    }

    res.status(401).json({ success: false });
});

// 📊 rezerwacje dla admina
app.get("/admin-reservations", (req, res) => {
    if (!isAdmin) {
        return res.status(403).json({ error: "Brak dostępu" });
    }

    res.json(reservations);
});

app.listen(PORT, () => {
    console.log(`Serwer działa: http://localhost:${PORT}`);
});

console.log("Salon działa");