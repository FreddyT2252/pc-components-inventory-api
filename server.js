
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/products", (req, res) => {
  res.json({
    message: "Welcome to PC Components Inventory API",
    products: []
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
