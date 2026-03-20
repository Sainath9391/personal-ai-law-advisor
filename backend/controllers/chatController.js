const Groq = require("groq-sdk");
const Chat = require("../models/Chat");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

exports.askLegalAI = async (req, res) => {
  try {
    const { question, userId } = req.body;

    if (!question) {
      return res.status(400).json({ msg: "Question is required" });
    }

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are an AI Legal Advisor specialized in Indian law.

STRICT FORMAT RULES:
- Use ONLY HTML tags: <div> and <b>
- NEVER use <br>
- Each section MUST be wrapped in <div>
- Headings must be inside <b> tags
- Each line must be in a separate <div>
- Do NOT merge everything into one line
- Maintain clean readable structure

FOLLOW EXACT FORMAT:

<div><b>TOPIC</b></div>
<div>[topic here]</div>

<div><b>WHAT IT MEANS</b></div>
<div>[1-2 sentence explanation]</div>

<div><b>KEY POINTS</b></div>
<div>1. [point one]</div>
<div>2. [point two]</div>
<div>3. [point three]</div>

<div><b>EXAMPLE</b></div>
<div>[example]</div>

<div><b>WHAT YOU CAN DO</b></div>
<div>1. [step one]</div>
<div>2. [step two]</div>

<div><b>DISCLAIMER</b></div>
<div>This is general legal information, not legal advice. Please consult a qualified lawyer.</div>

If formatting is not followed, correct it before answering.`
        },
        {
          role: "user",
          content: question
        }
      ],
      temperature: 0.7,
      max_tokens: 1024
    });

    const answer = chatCompletion.choices[0].message.content;

    if (userId) {
      const chat = new Chat({ userId, question, answer });
      await chat.save();
    }

    res.json({ answer });

  } catch (error) {
    console.error("Groq Error:", error);
    res.status(500).json({
      msg: "AI response failed",
      error: error.message
    });
  }
};