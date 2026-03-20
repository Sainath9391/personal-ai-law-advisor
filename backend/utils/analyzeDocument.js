const groq = require("./groq");

exports.analyzeWithGroq = async (text) => {

  const prompt = `
You are a professional Indian legal advisor.

STRICT RULES:
- Return ONLY valid JSON
- No markdown
- No explanation
- Output must be directly parsable

Format:

{
  "summary": "",
  "category": "",
  "risk_level": "Low | Medium | High",
  "issues": [],
  "actions": [],
  "legal_process": [],
  "final_advice": ""
}

Instructions:
- Identify correct legal category (Contract, NDA, Criminal, Civil, etc.)
- Always provide at least 3–5 actions
- Always provide step-by-step legal process
- Do NOT leave fields empty
- Keep output practical and realistic

Document:
${text.slice(0, 8000)}
`;

  let response;

  try {
    response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2
    });

  } catch {
    // fallback model (silent)
    response = await groq.chat.completions.create({
      model: "mixtral-8x7b-32768",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2
    });
  }

  let content = response.choices[0].message.content;

  // ✅ clean markdown if present
  content = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(content);
  } catch {
    return {
      summary: content,
      category: "Unknown",
      risk_level: "Unknown",
      issues: [],
      actions: ["Unable to parse structured response"],
      legal_process: [],
      final_advice: "Please review manually"
    };
  }
};