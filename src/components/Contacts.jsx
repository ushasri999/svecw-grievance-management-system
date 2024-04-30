import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // You can add your logic to submit the form data here
    console.log(formData);

    if (!formData.name || formData.name.trim() === "" || !formData.email || formData.email.trim() === "" || !formData.message || formData.message.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/postContact", formData);

      alert("Thank you");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (err) {
      console.error(err.message);
    }

    // Reset form fields after submission
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url('bg.png')"}}>
      <div className="bg-black bg-opacity-30 min-h-screen flex justify-center items-center">
        <div className="container mx-auto flex justify-center items-center">
          <div className="max-w-3xl w-full md:w-2/3 lg:w-1/2 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 text-indigo-800">Contact Us</h2>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2" />
                  <span className="font-bold">Call:</span> +1 123 456 7890
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-2" />
                  <span className="font-bold">Email:</span> example@example.com
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
                  <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                </div>
                <button type="submit" className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 self-start">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
