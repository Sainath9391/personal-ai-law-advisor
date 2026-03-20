const express = require("express");
const multer = require("multer");
const { analyzeDocument } = require("../controllers/analyzeController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/analyze", upload.single("file"), analyzeDocument);

module.exports = router; // ✅ IMPORTANT