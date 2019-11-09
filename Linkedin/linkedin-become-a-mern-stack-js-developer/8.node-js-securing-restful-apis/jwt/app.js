const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

// Format Token
// Authorization: Bearer <access_token>

// verify token
const verifyToken = (req, res, next) => {
  // Get Auth Header Value
  const bearerHeader = req.header["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split token
    const bearer = bearerHeader.split(" ");
    // Get Token from array
    // Set Token
    req.token = bearer[1];
    next();
  }
  res
    .status(403)
    .json({ status: "authorization", message: "Check Credentials Again" });
};

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to API"
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "luvusmsmsecretkey", (err, authData) => {
    if (error)
      res.status(500).json({ status: "error", message: error.message });
    res
      .status(200)
      .json({ status: "success", message: "Welcome to API", data: authData });
  });
});

app.post("/api/login", (req, res) => {
  // Mock user
  const user = { id: 1, username: "mohammedelzanaty", password: "3123masd!%" };

  jwt.sign(
    { user },
    "luvusmsmsecretkey",
    { expiresIn: "30s" },
    (error, token) => {
      if (error)
        res.status(500).json({ status: "error", message: error.message });
      res.status(200).json({ status: "success", token });
    }
  );
});

app.listen(5000, () => {
  console.log(`Server start @ 5000`);
});
