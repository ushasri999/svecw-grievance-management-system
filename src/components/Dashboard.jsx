import React from "react";
import { Link } from "react-router-dom";
import '../css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url('bg.png')"}}>
      <div className="bg-black bg-opacity-30 min-h-screen flex justify-center items-center">
        <div className="container mx-auto flex justify-center items-center">
          <div className="max-w-3xl mx-auto bg-white  rounded-lg shadow-lg overflow-hidden flex">
            
            <div className="w-full p-8">
              <h2 className="text-3xl font-bold mb-4">Welcome to Grievance System</h2>
              <p className="mb-6">Choose an option below:</p>

              <Link
                to="/home?currentPage=Which Grievance"
                className="block w-full text-center bg-blue-500 text-white font-semibold py-3 px-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-2"
              >
                Raise Grievance
              </Link>

              <Link
                to="/home?currentPage=My Grievances"
                className="block w-full text-center bg-gray-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                My Grievances
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
