import React, { useState } from "react";
import api from "../api";

function DocumentAnalyzer() {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {

    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await api.post(
        "/api/analyze",
        formData
      );

      setResult(res.data);

    } catch (err) {
      alert("Error analyzing document");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="doc-container">

      <div className="doc-card">

        <h1>📄 Document Analyzer</h1>
        <p className="doc-sub">
          Upload your legal document and get AI-powered insights
        </p>

        <div className="upload-box">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="analyze-btn" onClick={handleUpload}>
          {loading ? "Analyzing..." : "Analyze Document"}
        </button>

      </div>

      {result && (
        <div className="result-card">

          <div className="result-section">
            <h3>Summary</h3>
            <p>{result.summary || "No summary available."}</p>
          </div>

          <div className="result-section">
            <h3>Legal Category</h3>
            <p className="badge">{result.category || "Uncategorized"}</p>
          </div>

          <div className="result-section">
            <h3>Suggested Actions</h3>
            {(result.actions || []).length > 0 ? (
              <ul>
                {(result.actions || []).map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            ) : (
              <p>No actions suggested.</p>
            )}
          </div>

        </div>
      )}

    </div>
  );
}

export default DocumentAnalyzer;