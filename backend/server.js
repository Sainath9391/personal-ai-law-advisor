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

const express = require("express");
const cors = require("cors");

const app = express();

/* 🔥 CORS MUST BE FIRST */
app.use(cors({
  origin: "https://personal-ai-law-advisor.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

/* 🔥 HANDLE PREFLIGHT (IMPORTANT) */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://personal-ai-law-advisor.onrender.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

/* 🔥 HANDLE PREFLIGHT (IMPORTANT) */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://personal-ai-law-advisor.onrender.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

/* BODY PARSER */
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