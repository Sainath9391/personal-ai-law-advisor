const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: "guest"
  },
  documentName: String,
  documentType: String,
  summary: String,
  category: String,
  risk_level: String,
  issues: [String],
  actions: [String],
  legal_process: [String],
  final_advice: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Document", documentSchema);