const dotenv = require("dotenv");
dotenv.config(); // MUST be first

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const analyzeRoutes = require("./routes/analyzeRoutes"); // ✅ FIXED
const documentRoutes = require("./routes/documentRoutes");

connectDB();

const app = express();

app.use(cors({
  origin: ["https://personal-ai-law-advisor.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.options("*", cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api", analyzeRoutes);
app.use("/api", documentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("GROQ KEY:", process.env.GROQ_API_KEY ? "✅ Loaded" : "❌ Missing");
});