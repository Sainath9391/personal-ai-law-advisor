import React, { useState, useEffect } from "react";

function Profile() {

  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  /* LOAD USER */
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
      setFormData(storedUser);
    }
  }, []);

  /* HANDLE INPUT */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* SAVE */
  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    setUser(formData);
    setEditMode(false);
  };

  /* CANCEL (restore old data) */
  const handleCancel = () => {
    setFormData(user);   // 🔥 revert changes
    setEditMode(false);
  };

  return (

    <div className="profile-page">

      <h1 className="profile-title">Client Profile</h1>

      <div className="profile-grid">

        {/* PROFILE CARD */}
        <div className="profile-card">

          <img
            className="profile-avatar"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />

          <h2>{user.name || "User Name"}</h2>
          <p>{user.email || "user@email.com"}</p>

          <button
            className="edit-btn"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>

        </div>

        {/* DETAILS */}
        <div className="profile-details">

          <h3>Account Information</h3>

          {editMode ? (

            /* EDIT MODE */
            <div className="edit-form">

              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="edit-buttons">

                <button
                  className="save-btn"
                  onClick={handleSave}
                >
                  Save
                </button>

                <button
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

              </div>

            </div>

          ) : (

            /* VIEW MODE */
            <div>

              <div className="detail-row">
                <span>Name</span>
                <span>{user.name || "-"}</span>
              </div>

              <div className="detail-row">
                <span>Email</span>
                <span>{user.email || "-"}</span>
              </div>

              <div className="detail-row">
                <span>Account Type</span>
                <span>Legal AI Client</span>
              </div>

              <div className="detail-row">
                <span>Status</span>
                <span className="active-status">Active</span>
              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Profile;