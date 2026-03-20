import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await axios.get("https://personal-ai-law-advisor-backend.onrender.com/api/documents");
      setDocuments(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="history-container">

      <h1 className="history-title">📄 Analysis History</h1>

      {loading ? (
        <p>Loading...</p>
      ) : documents.length === 0 ? (
        <p>No documents analyzed yet</p>
      ) : (
        <div className="history-grid">

          {documents.map((doc) => (
            <div key={doc._id} className="history-card">

              <h3>{doc.documentName}</h3>

              <p className="history-type">
                {doc.documentType || "Unknown"}
              </p>

              <p className="history-summary">
                {doc.summary?.slice(0, 100)}...
              </p>

              <div className="history-footer">

                <span className={`risk ${doc.risk_level?.toLowerCase()}`}>
                  {doc.risk_level || "Unknown"}
                </span>

                <span className="date">
                  {new Date(doc.createdAt).toLocaleDateString()}
                </span>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default History;