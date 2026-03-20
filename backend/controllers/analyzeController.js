const fs = require("fs");
const { analyzeWithGroq } = require("../utils/analyzeDocument");
const Document = require("../models/Document"); // ✅ import model

exports.analyzeDocument = async (req, res) => {

  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;

    const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

    const data = new Uint8Array(fs.readFileSync(filePath));

    const pdf = await pdfjsLib.getDocument({ data }).promise;

    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();

      const strings = content.items.map(item => item.str);
      text += strings.join(" ") + "\n";
    }

    // 🔥 AI ANALYSIS
   const result = await analyzeWithGroq(text);

// ✅ FIX legal_process (convert objects → strings)
const formattedLegalProcess = (result.legal_process || []).map(step => {
  if (typeof step === "string") return step;
  return `${step.step}: ${step.description}`;
});

// ✅ SAVE TO DB
await Document.create({
  documentName: req.file.originalname,
  documentType: result.document_type,
  summary: result.summary,
  category: result.category,
  risk_level: result.risk_level,
  issues: result.issues || [],
  actions: result.actions || [],
  legal_process: formattedLegalProcess, // ✅ FIXED
  final_advice: result.final_advice
});

    // cleanup
    fs.unlinkSync(filePath);

    // return response
    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Analysis failed" });
  }
};