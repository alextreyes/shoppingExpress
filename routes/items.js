// routes/items.js

const express = require("express");
const router = express.Router();

// Fake database
const items = require("../fakeDb");

// GET /items
router.get("/", (req, res) => {
  res.json(items);
});

// POST /items
router.post("/", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json({ added: newItem });
});

// GET /items/:name
router.get("/:name", (req, res) => {
  const foundItem = items.find((item) => item.name === req.params.name);
  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// PATCH /items/:name
router.patch("/:name", (req, res) => {
  const foundIndex = items.findIndex((item) => item.name === req.params.name);
  if (foundIndex !== -1) {
    items[foundIndex] = { ...items[foundIndex], ...req.body };
    res.json({ updated: items[foundIndex] });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE /items/:name
router.delete("/:name", (req, res) => {
  const foundIndex = items.findIndex((item) => item.name === req.params.name);
  if (foundIndex !== -1) {
    items.splice(foundIndex, 1);
    res.json({ message: "Deleted" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

module.exports = router;
