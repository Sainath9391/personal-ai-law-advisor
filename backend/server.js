const dotenv = require("dotenv");
dotenv.config(); // MUST be first

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const analyzeRoutes = require("./routes/analyzeRoutes"); // ✅ FIXED
const documentRoutes = require("./routes/documentRoutes");

const app = express();

const allowedOrigins = [
  "https://personal-ai-law-advisor.onrender.com",
  "http://localhost:3000"
];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api", analyzeRoutes);
app.use("/api", documentRoutes);

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log("GROQ KEY:", process.env.GROQ_API_KEY ? "✅ Loaded" : "❌ Missing");
      console.log("JWT SECRET:", process.env.JWT_SECRET ? "✅ Loaded" : "❌ Missing");
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();