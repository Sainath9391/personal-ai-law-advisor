<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:DC2626,50:7C3AED,100:F59E0B&height=210&section=header&text=AI%20Legal%20Advisor&fontSize=56&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Document-Grounded%20Legal%20AI%20%7C%20Indian%20Legal%20Systems%20%7C%20Groq%20LLM%20%7C%20PDF%20Analysis&descAlignY=56&descSize=15&descColor=e2e8f0" />

</div>

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=600&size=18&duration=3500&pause=1000&color=F59E0B&center=true&vCenter=true&width=750&height=50&lines=AI-Powered+Legal+Document+Analyzer+%7C+Groq+LLM;Ask+Legal+Questions+in+Plain+Language;Risk+Level+%7C+Legal+Issues+%7C+Actionable+Steps;Built+for+Indian+Legal+Systems+%7C+Full+Stack+App" alt="Typing SVG" />

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Groq](https://img.shields.io/badge/Groq%20API-F55036?style=for-the-badge&logo=groq&logoColor=white)](#)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://render.com)

<br/>

[![License](https://img.shields.io/badge/License-MIT-7C3AED?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Live%20%26%20Production%20Ready-22C55E?style=flat-square)](#)
[![Stack](https://img.shields.io/badge/Stack-Full%20Stack%20AI-DC2626?style=flat-square)](#)
[![AI](https://img.shields.io/badge/AI-Groq%20LLaMA%203-F59E0B?style=flat-square)](#)

<br/>

[**🌐 Live Demo**](https://personal-ai-law-advisor.onrender.com) &nbsp;·&nbsp; [**⚙️ Backend API**](https://personal-ai-law-advisor-backend.onrender.com) &nbsp;·&nbsp; [**🐛 Report Bug**](#) &nbsp;·&nbsp; [**💡 Request Feature**](#)

</div>

<br/>

---

<div align="center">
<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png" width="100%"/>
</div>

## &nbsp; Table of Contents

&nbsp;&nbsp;[01 &nbsp; Overview](#-overview) &nbsp;·&nbsp;
[02 &nbsp; Problem Statement](#-problem-statement) &nbsp;·&nbsp;
[03 &nbsp; Solution Architecture](#-solution-architecture) &nbsp;·&nbsp;
[04 &nbsp; System Architecture](#-system-architecture)

&nbsp;&nbsp;[05 &nbsp; Tech Stack](#-tech-stack) &nbsp;·&nbsp;
[06 &nbsp; Core Features](#-core-features) &nbsp;·&nbsp;
[07 &nbsp; Project Structure](#-project-structure) &nbsp;·&nbsp;
[08 &nbsp; Getting Started](#-getting-started)

&nbsp;&nbsp;[09 &nbsp; Environment Variables](#-environment-variables) &nbsp;·&nbsp;
[10 &nbsp; API Reference](#-api-reference) &nbsp;·&nbsp;
[11 &nbsp; How Document Analysis Works](#-how-document-analysis-works) &nbsp;·&nbsp;
[12 &nbsp; Example Interaction](#-example-interaction)

&nbsp;&nbsp;[13 &nbsp; Security](#-security) &nbsp;·&nbsp;
[14 &nbsp; Future Enhancements](#-future-enhancements) &nbsp;·&nbsp;
[15 &nbsp; Contributing](#-contributing) &nbsp;·&nbsp;
[16 &nbsp; Author](#-author)

<div align="center">
<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png" width="100%"/>
</div>

<br/>

## ◈ Overview

**AI Legal Advisor** is a production-ready, full-stack AI application that makes legal understanding accessible to everyone. It analyzes uploaded PDF legal documents and answers natural language legal questions — grounded in **Indian legal systems** — using the **Groq LLM (LLaMA 3 Instruct)** for fast, structured, actionable responses.

> _Upload a legal document. Ask a question. Get a structured legal breakdown — summary, risk level, legal issues, suggested actions, and a step-by-step legal process — in seconds._

<br/>

## ◈ Problem Statement

Legal documents are dense, jargon-heavy, and inaccessible to most people. Navigating the Indian legal system without professional help is overwhelming — and expensive.

```
  Dense legal PDFs          →  Most people can't understand their own documents
  High lawyer fees           →  First-pass analysis is cost-prohibitive
  Manual interpretation      →  Time-consuming and error-prone
  No actionable guidance     →  People don't know their next steps
```

Individuals, small businesses, and students need an AI-first tool that reads legal documents, identifies risks and issues, and provides clear, structured guidance — without requiring a law degree.

<br/>

## ◈ Solution Architecture

AI Legal Advisor implements a structured **Document Intelligence Pipeline** across five stages:

<div align="center">

| Stage | Component | What Happens |
|:---:|:---:|:---|
| 01 | **PDF Upload & Text Extraction** | User uploads PDF; backend extracts raw legal text |
| 02 | **Prompt Engineering** | Extracted text wrapped in a strict structured legal prompt |
| 03 | **Groq LLM Inference** | LLaMA 3 Instruct generates a structured JSON legal analysis |
| 04 | **Response Parsing & Storage** | Structured result parsed and saved to MongoDB |
| 05 | **UI Rendering** | Interactive step cards, risk badges, and legal breakdown displayed |

</div>

<br/>

## ◈ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        User / Client                            │
│         Uploads PDF  ·  Asks: "Is this contract safe?"          │
└──────────────────────────────┬──────────────────────────────────┘
                               │  Multipart Form / JSON Request
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Express.js REST API                           │
│                                                                 │
│  ┌────────────────────┐      ┌──────────────────────────────┐   │
│  │  PDF Text Extractor │      │  Structured Prompt Builder   │   │
│  │  (raw legal text)   │ ──►  │  (context-locked to doc)     │   │
│  └────────────────────┘      └──────────────┬───────────────┘   │
└─────────────────────────────────────────────┼───────────────────┘
                                              │
                                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Groq API — LLaMA 3 Instruct                  │
│                                                                 │
│  Generates structured JSON response:                            │
│  summary · legal_category · risk_level · legal_issues           │
│  suggested_actions · step_by_step_legal_process                 │
└──────────────────────────────┬──────────────────────────────────┘
                               │  Parsed JSON
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    MongoDB Atlas                                 │
│       Stores result linked to authenticated user                │
└──────────────────────────────┬──────────────────────────────────┘
                               │  API Response
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│              React.js Frontend                                   │
│  Risk Badge · Legal Issues · Step Cards · History Panel         │
└─────────────────────────────────────────────────────────────────┘
```

<br/>

## ◈ Tech Stack

<div align="center">

| Layer | Technology | Role |
|:---:|:---:|:---|
| **Frontend** | React.js, Axios, Custom CSS | Responsive UI — chat, document upload, history |
| **Backend** | Node.js, Express.js | REST API, PDF processing, prompt construction |
| **Database** | MongoDB Atlas (Mongoose) | User data, document analysis history |
| **AI / LLM** | Groq API — LLaMA 3 Instruct | Legal analysis, Q&A, structured JSON generation |
| **Auth** | Session-based Authentication | Secure user login, protected routes |
| **Deployment** | Render (Frontend + Backend) | Cloud hosting, free tier supported |

</div>

<br/>

## ◈ Core Features

**🧠 AI Legal Advisor (Chat)**  
Ask any legal question in plain language. The AI responds with context-aware legal guidance grounded in Indian legal systems — no jargon, no confusion.

**📄 Document Analyzer**  
Upload any PDF legal document and receive a fully structured breakdown:

```
✅ Summary            →  Plain-language overview of the document
🏷️ Legal Category     →  Contract / Property / Criminal / Civil / Family
⚠️ Risk Level         →  Low · Medium · High
🔍 Legal Issues       →  Key problems and red flags identified
💡 Suggested Actions  →  What you should do next
🪜 Legal Process      →  Step-by-step actionable legal roadmap
```

**📊 History Tracking**  
All analyzed documents saved to MongoDB per user. View, revisit, and compare past analyses anytime.

**🔐 Authentication**  
Secure Signup/Login with session handling. Every user gets a private, personalized experience.

**🎨 Interactive UI**  
Mobile-responsive design with interactive legal process step cards, risk-level badges, and a clean chat interface — built for long usage sessions.

<br/>

## ◈ Project Structure

```
personal-ai-law-advisor/
│
├── backend/
│   ├── config/
│   │   └── db.js                   # MongoDB Atlas connection
│   ├── controllers/
│   │   ├── authController.js       # Signup, login, session management
│   │   ├── chatController.js       # Legal Q&A via Groq API
│   │   ├── analyzeController.js    # PDF upload, text extraction, AI analysis
│   │   └── historyController.js    # Fetch stored document history per user
│   ├── models/
│   │   ├── User.js                 # User schema (name, email, password)
│   │   └── Document.js             # Analysis result schema
│   ├── routes/
│   │   ├── authRoutes.js           # /api/auth/*
│   │   ├── chatRoutes.js           # /api/chat/*
│   │   ├── analyzeRoutes.js        # /api/analyze
│   │   └── historyRoutes.js        # /api/documents
│   ├── utils/
│   │   └── pdfExtractor.js         # PDF → raw text utility
│   ├── .env                        # Environment variables (not committed)
│   └── server.js                   # Express entry point
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/             # Reusable UI components
│       ├── pages/                  # Route-level page components
│       ├── services/               # Axios API wrappers
│       ├── App.js                  # Root component & routing
│       └── index.js                # React DOM entry point
│   └── package.json
│
└── README.md
```

<br/>

## ◈ Getting Started

**1. Clone the Repository**

```bash
git clone https://github.com/your-username/personal-ai-law-advisor.git
cd personal-ai-law-advisor
```

**2. Backend Setup**

```bash
cd backend
npm install
```

Create `backend/.env` (see [Environment Variables](#-environment-variables)):

```bash
npm start
# → http://localhost:5000
```

**3. Frontend Setup**

```bash
cd frontend
npm install
npm start
# → http://localhost:3000
```

<br/>

## ◈ Environment Variables

**`backend/.env`**

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
GROQ_API_KEY=your_groq_api_key
```

<div align="center">

| Variable | Description | Example |
|:---:|:---:|:---|
| `PORT` | Express server port | `5000` |
| `MONGO_URI` | MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster...` |
| `GROQ_API_KEY` | Groq API key for LLM inference | `gsk_...` |

</div>

> 🔒 Never commit `.env` to version control. Add `backend/.env` to `.gitignore` immediately.

<br/>

## ◈ API Reference

<div align="center">

| Method | Endpoint | Description | Access |
|:---:|:---:|:---|:---:|
| `POST` | `/api/auth/signup` | Register a new user | Public |
| `POST` | `/api/auth/login` | Authenticate user, start session | Public |
| `POST` | `/api/chat/ask` | Ask a legal question, get AI response | Authenticated |
| `POST` | `/api/analyze` | Upload PDF, extract text, run AI analysis | Authenticated |
| `GET` | `/api/documents` | Retrieve all past analyses for current user | Authenticated |

</div>

<br/>

## ◈ How Document Analysis Works

```
📤  User uploads PDF via frontend
          │
          ▼
📃  Backend extracts raw text from PDF
          │
          ▼
🧠  Structured legal prompt constructed:
    "Analyze this document. Respond ONLY in JSON.
     Fields: summary, legal_category, risk_level,
     legal_issues, suggested_actions, legal_process"
          │
          ▼
⚡  Prompt sent to Groq API — LLaMA 3 Instruct
          │
          ▼
📦  AI returns structured JSON response:
    ├── summary
    ├── legal_category
    ├── risk_level         (Low / Medium / High)
    ├── legal_issues       [ array of identified problems ]
    ├── suggested_actions  [ array of recommended steps ]
    └── step_by_step_legal_process  [ ordered legal roadmap ]
          │
          ▼
💾  Result stored in MongoDB linked to user account
          │
          ▼
📊  Rendered in React with interactive step cards & risk badges
```

<br/>

## ◈ Example Interaction

**Document Upload — Contract Analysis**

```
User uploads:  Employment Contract.pdf

AI Response:
─────────────────────────────────────────────────────
Summary         →  A fixed-term employment agreement between employer
                   and employee for 24 months. Contains non-compete
                   and IP assignment clauses.

Legal Category  →  Employment / Contract Law

Risk Level      →  ⚠️ HIGH

Legal Issues    →  • Non-compete clause is overly broad — may be
                     unenforceable under Indian Contract Act, 1872
                   • No mention of notice period for employer-initiated
                     termination
                   • IP assignment clause transfers all work including
                     pre-employment creations

Suggested       →  • Negotiate non-compete scope before signing
Actions            • Request explicit notice period clause
                   • Seek legal review of IP assignment terms

Legal Process   →  Step 1: Consult a labour law attorney
                   Step 2: Request clause amendments in writing
                   Step 3: Verify enforceability under Indian law
                   Step 4: Sign only after mutual written agreement
─────────────────────────────────────────────────────
```

**Legal Chat**

```
User:   What happens if my employer doesn't pay my notice period?
AI:     Under Section 25F of the Industrial Disputes Act, 1947,
        an employer is legally required to pay compensation equivalent
        to the notice period. You can file a complaint with the Labour
        Commissioner or approach the Labour Court...
```

<br/>

## ◈ Security

<div align="center">

| Concern | Approach |
|:---:|:---|
| **API Keys** | Stored in `.env` — never sent to or exposed in the frontend |
| **CORS** | Configured to allow only the frontend origin domain |
| **Passwords** | Hashed before storage — never stored in plaintext |
| **Sessions** | Secure session handling — authenticated routes protected |
| **File Uploads** | Multer validates file type — only PDFs accepted |
| **Database** | MongoDB Atlas — encrypted at rest and in transit |

</div>

<br/>

## ◈ Future Enhancements

- [ ] 📊 **Advanced Analytics Dashboard** — Visualize risk distribution and document trends across users
- [ ] 📄 **Downloadable Legal Reports** — Export full analysis as a formatted, shareable PDF
- [ ] 🌐 **Multi-language Support** — Hindi and other Indian regional languages
- [ ] 🔐 **Role-Based Access** — Admin, Verified Lawyer, and Standard User tiers
- [ ] 📱 **Mobile App** — React Native version for iOS & Android
- [ ] 🔔 **Legal Deadline Alerts** — Notifications for upcoming legal action windows
- [ ] 📚 **Indian Legal Knowledge Base** — Searchable index of IPC, CPC, and major Indian acts
- [ ] 🤖 **Multi-document Cross-Analysis** — Compare and cross-reference related documents

<br/>

## ◈ Contributing

Contributions are welcome and appreciated!

```bash
# 1. Fork the repository on GitHub

# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes and commit
git commit -m "Add: clear description of what you built"

# 4. Push to your fork
git push origin feature/your-feature-name

# 5. Open a Pull Request on GitHub
```

Please follow the existing code structure and include meaningful commit messages.

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:F59E0B,50:7C3AED,100:DC2626&height=120&section=footer" />

<div align="center">

## ◈ Author

**Sainath Pendalwar**  
_B.Tech CSE (Data Science) &nbsp;·&nbsp; Full Stack Developer &nbsp;·&nbsp; AI Enthusiast_

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sainath9391)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/pendalwar-sainath-598169349)
[![Portfolio](https://img.shields.io/badge/Portfolio-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)](https://sainath9391.github.io/SmartPortfolio_Sainath/)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sainathpendalwar43@gmail.com)

<br/>

⭐ **Star this repo** if it helped you &nbsp;·&nbsp; 🔁 **Share** with others &nbsp;·&nbsp; 💡 **Open an issue** for feedback

<br/>

<sub>Built with precision &nbsp;·&nbsp; Designed for accessibility &nbsp;·&nbsp; Making legal understanding free for everyone</sub>

## ◈ License

This project is licensed under the **MIT License** — see [`LICENSE`](LICENSE) for full details.

</div>
