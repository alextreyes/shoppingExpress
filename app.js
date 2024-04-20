// app.js

const express = require("express");
const app = express();
const itemsRouter = require("./routes/items");

// Middleware
app.use(express.json());

// Routes
app.use("/items", itemsRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
