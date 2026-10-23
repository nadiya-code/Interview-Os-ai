const express = require("express");

const router = express.Router();

const { runCode } = require("../controllers/codeController");

// Health-check route
router.get("/api/code/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Code execution routes are working!",
  });
});

// Execute C++ code
router.post("/api/code/run", runCode);

module.exports = router;