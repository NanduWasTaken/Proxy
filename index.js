// proxy.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

const app = express();

// Serve index.html from /public
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(cors());
app.use(express.json());

app.all("/api", async (req, res) => {
    const targetUrl = req.query.url || req.body.url;

    if (!targetUrl) {
        return res.status(400).json({ error: "Missing 'url' parameter." });
    }

    try {
        const method = req.method.toLowerCase();

        const axiosOptions = {
            method,
            url: targetUrl,
            headers: req.headers,
            data: req.body.data ?? req.body,
            validateStatus: () => true // prevent throwing on non-200 responses
        };

        delete axiosOptions.headers["host"];
        delete axiosOptions.headers["content-length"];
        delete axiosOptions.headers["origin"];

        const response = await axios(axiosOptions);

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(response.status).send(response.data);
    } catch (err) {
        res.status(500).json({ error: "Proxy request failed", message: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on http://localhost:${PORT}/api`));
