const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware (OGFN style)
app.use((req, res, next) => {
  console.log(`[OGFN BACKEND] ${req.method} ${req.url}`);
  next();
});

// API route (REAL BACKEND)
app.get("/api/lisa", (req, res) => {
  res.json({
    name: "Lisa",
    status: "working on the site",
    likes: ["pepperoni pizza", "coke"]
  });
});

// Health route
app.get("/health", (req, res) => {
  res.json({ status: "ok", backend: true });
});

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Catch-all
app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`[OGFN BACKEND] Running on port ${PORT}`);
});
