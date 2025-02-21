import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../css/Support.css";
import ScrollToTop from "../components/ScrollToTop";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://madreakuna-api.onrender.com/support",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className="container support">
        <div className="support-text">
          <h1>Support</h1>
          <p>Do you need something? Feel free to write to us for support.</p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            {responseMessage && (
              <p
                className={
                  responseMessage.includes("successfully")
                    ? "response-message-success"
                    : "response-message-error"
                }
              >
                {responseMessage}
              </p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            <span>{errors.name ? errors.name : ""}</span>
            <input
              type="text"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
            />
            <span>{errors.email ? errors.email : ""}</span>
            <textarea
              name="message"
              placeholder="Enter message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <span>{errors.message ? errors.message : ""}</span>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
