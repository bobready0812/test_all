const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.json({
    message: "hello from backend"
  })
});

module.exports = router;
