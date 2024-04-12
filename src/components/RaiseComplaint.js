import React, { useState } from "react";
import { GetAuthHeader } from "../utils/Headers";
import "../css/RaiseComplaint.css"; // Import the CSS file for styling
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const RaiseComplaint = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (!name || name.trim() === "" || !room || room.trim() === "" || !description || description.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }

    try {
      console.log(localStorage.getItem("jwtToken"));
      const headers = GetAuthHeader();
      console.log("headers", headers);
      const body = { name, description, room };
      const response = await fetch("http://localhost:5000/complaints", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      alert("Thank you")
      navigate("/home?currentPage=Dashboard");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="raise-container">
      {/* <Header/> */}
      <div className="row justify-content-center">
    <div className="complaint-container">
      <h3 className="form-heading">Submit Your Grievance</h3>
      <div className="complaint-form">
        <div className="complaint-fields">
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="Enter Complaint name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="email"
            type="text"
            className="form-input"
            placeholder="Enter your Room No."
            onChange={(e) => setRoom(e.target.value)}
          />
          <label className="form-label">Tell us about your grievance</label>
          <textarea
            id="about"
            className="form-textarea"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            className="form-button"
            onClick={onSubmitForm}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default RaiseComplaint;
