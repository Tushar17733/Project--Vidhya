import React, { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    username: "",
    email: "",
    password: "",
    schoolName: "",
    std: "",
  });

  const [stdError, setStdError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "std") {
      const numericValue = value.replace(/\D/g, ""); // Allow only numbers
      
      if (numericValue && (numericValue < 6 || numericValue > 12)) {
        setStdError("Standard must be between 6 and 12.");
      } else {
        setStdError("");
      }

      setFormData((prevData) => ({ ...prevData, [name]: numericValue }));
    } 
    else if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, ""); // Allow only numbers

      if (numericValue.length > 10) {
        setPhoneError("Phone number cannot exceed 10 digits.");
      } else if (numericValue.length < 10 && numericValue.length > 0) {
        setPhoneError("Phone number must be exactly 10 digits.");
      } else {
        setPhoneError("");
      }

      setFormData((prevData) => ({ ...prevData, [name]: numericValue }));
    }
    else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phoneNumber || formData.phoneNumber.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    if (!formData.std || formData.std < 6 || formData.std > 12) {
      setStdError("Standard must be between 6 and 12.");
      return;
    }

    alert("Form Submitted Successfully!");

    // ✅ Reset all fields after successful submission
    setFormData({
      phoneNumber: "",
      username: "",
      email: "",
      password: "",
      schoolName: "",
      std: "",
    });

    // ✅ Clear errors after form reset
    setStdError("");
    setPhoneError("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        type="text" 
        name="phoneNumber" 
        placeholder="Phone Number" 
        value={formData.phoneNumber}
        onChange={handleChange} 
        required 
      />
      {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}

      <input 
        type="text" 
        name="username" 
        placeholder="Username" 
        value={formData.username}
        onChange={handleChange} 
        required 
      />
      
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email}
        onChange={handleChange} 
        required 
      />
      
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password}
        onChange={handleChange} 
        required 
      />
      
      <input 
        type="text" 
        name="schoolName" 
        placeholder="School Name" 
        value={formData.schoolName}
        onChange={handleChange} 
        required 
      />

      <input 
        type="number" 
        name="std" 
        placeholder="STD" 
        onChange={handleChange} 
        value={formData.std} 
        required 
        min={6} 
        max={12}
      />
      {stdError && <p style={{ color: "red" }}>{stdError}</p>}

      <div className="agree">
        <input type="checkbox" name="terms" id="box" required />
        <p className="subtitle" id="box2">
          By creating an account you have to agree with our terms & condition.
        </p>
      </div>

      <button type="submit" className="submit-btn">CREATE ACCOUNT</button>
      <p className="login-link">Already have an account? <span>Log in</span></p>
    </form>
  );
};

export default StudentForm;
