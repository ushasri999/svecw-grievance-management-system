import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import '../css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex justify-center items-center">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex">
          <div className="w-1/2 p-8">
            <img src='/DashboardImg.jpg' className="w-full" />
          </div>
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-4">Welcome to Grievance System</h2>
            <p className="mb-6">Choose an option below:</p>

            <Link
              to="/home?currentPage=Which Grievance"
              className="block w-full text-center bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-3"
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
