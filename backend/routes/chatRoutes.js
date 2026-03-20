const express = require("express");
const router = express.Router();

const { askLegalAI } = require("../controllers/chatController");

router.post("/ask", askLegalAI);

module.exports = router;