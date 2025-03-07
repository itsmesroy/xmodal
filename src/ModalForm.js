import React, { useState } from "react";
import "./App.css";
const ModalForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
   
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const validationForm=()=>{
    const errors= {username:'', email:'', phone:'', dob:''};
    let isValid=true;

      if (formData.email && !formData.email.includes("@")) {
        errors.email = "Invalid email. Please check your email address.";
        isValid = false;
      }
        
      if (formData.phone && formData.phone.length !== 10) {
        alert("Invalid phone number. Please enter a 10-digit phone number.");
        isValid = false;
      }
  

      if (formData.dob && new Date(formData.dob) > new Date()) {
        alert("Invalid date of birth. Date of birth cannot be in the future.");
        isValid = false;
      }
  
      setError(errors); 
      return isValid;
    };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(validationForm()){
        alert('Form submitted successfully');
        setFormData({
          username: "", 
          email: "",
          phone: "",
          dob: "",
        }   )
        onClose();
    }
  }

    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal")) {
       
        onClose(); 
        console.log("you clicked")
      }
    };
   
  return (
    <div onClick={handleOutsideClick}>
    <div className="modal" 
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()} >
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit} style={{ fontWeight: "bold" }}>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <label style={{ margin: "10px" }} >Username:</label>
            <input
              onChange={handleChange}
              id="username"
              value={formData.username}
              style={{ textAlign: "center" }}
              placeholder="Enter username"
              type="text"
               required
            />
            {error.username && <p>{error.username}</p> } 
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <label style={{ margin: "10px" }}>Email Address:</label>
            <input
              onChange={handleChange}
              id="email"
              value={formData.email}
              type="email"
              required
            />
            {error.email && <p>{error.email}</p> }
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <label style={{ margin: "10px" }}>Phone Number:</label>
            <input
              onChange={handleChange}
              id="phone"
              value={formData.phone}
              type="number"
              required
            />
            {error.phone && <p>{error.phone}</p> }
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <label style={{ margin: "10px" }}>Date of Birth:</label>
            <input
              onChange={handleChange}
              id="dob"
              style={{ textAlign: "center" }}
              value={formData.dob}
              type="date"
              required
            />
            {error.dob && <p>{error.dob}</p> }
          </div>
          <button className="button submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};
export default ModalForm;
