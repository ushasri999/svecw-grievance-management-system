import React, { useState } from "react";
import { GetAuthHeader } from "../utils/Headers";
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

      alert("Thank you");
      navigate("/home?currentPage=Dashboard");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-full  bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url('bg.png')"}}>
      <div className="bg-black bg-opacity-30 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-md p-8 bg-white  rounded-lg shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-center">Submit Your Grievance</h3>
          <form className="space-y-4" onSubmit={onSubmitForm}>
            <div>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter Complaint name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                id="email"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your Room No."
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Tell us about your grievance</label>
              <textarea
                id="about"
                className="w-full px-4 py-2 border rounded-md"
                rows="4"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RaiseComplaint;
