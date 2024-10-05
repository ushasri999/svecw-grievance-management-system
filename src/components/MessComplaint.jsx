import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/Dashboard.css';
import { GetAuthHeader } from "../utils/Headers";

const MessComplaint = () => {
  const [comment, setComment] = useState("");
  const [satisfaction, setSatisfaction] = useState("");
  const [averageSatisfaction, setAverageSatisfaction] = useState(0);

  // useEffect(() => {
  //   // Fetch average satisfaction level from backend
  //   const fetchAverageSatisfaction = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/messComplaints/averageSatisfaction");
  //       setAverageSatisfaction(response.data.averageSatisfaction);
  //     } catch (error) {
  //       console.error("Error fetching average satisfaction:", error);
  //     }
  //   };

  //   fetchAverageSatisfaction();
  // }, []);

  const handleSubmit = async () => {
    try {
      // Send data to backend
      const headers = GetAuthHeader();
      const body = { comment, is_satisfied: satisfaction === "satisfied" ? true : false };
      const response = await fetch("http://localhost:5000/addMessComplaint", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (response.ok) {
        // Reset form fields
        setComment("");
        setSatisfaction("");
        // Fetch updated average satisfaction level
        const updatedResponse = await fetch("http://localhost:5000/getAverageSatisfaction", {
          method: "GET",
        });
        const jsonData = await updatedResponse.json();
        setAverageSatisfaction(jsonData.averageSatisfaction);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="w-full min-h-screen" style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-black bg-opacity-30 min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex justify-center items-center">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex">
            
            <div className="w-full p-8">
              <h2 className="text-2xl font-bold mb-4">Mess Complaints</h2>
              <p className="mb-4">Please provide your feedback:</p>

              <textarea
                className="w-full p-2 mb-4 border rounded-md"
                placeholder="Enter your comments..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              
                  

              

              <button
                className="block w-full text-center bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSubmit}
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

export default MessComplaint;
