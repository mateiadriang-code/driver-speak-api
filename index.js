const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    app: "Driver Speak",
    version: "1.1",
    status: "OK",
    message: "Backend is live 🚚🌍"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
