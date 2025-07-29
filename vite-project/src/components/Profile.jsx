import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  // Load from localStorage or use default values
  const [name, setName] = useState(() => localStorage.getItem("name") || "Srii");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "srii@example.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");

    // Save updated values to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    setName("");
    setEmail("");
  };

  useEffect(() => {
    // Restore data when user comes back
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  return (
    <div className="profile">
      <h2 className="text-xl font-bold mb-2">Profile</h2>

      <div className="profile-details">
        <div className="profile-pic-wrapper">
          <div className="profile-pic-emoji">😊</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="update-btn">Update Profile</button>
        </form>

        <button
          onClick={() => navigate("/dashboard")}
          className="back-btn"
          style={{
            marginTop: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Profile;
