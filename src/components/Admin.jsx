import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSide = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwtToken");
    navigate('/');
  };

  const handleHostelMaintenanceClick = () => {
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed left-0 right-0 bg-white shadow-md text-gray-800 py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="vishnuWhiteLogo.jpg" alt="Logo" className="h-10 w-10 mr-4" />
          <h1 className="text-2xl font-semibold">Grievance Management System</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="pt-20 px-6">
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold text-blue-600">Welcome to the Hostel Admin Dashboard</h2>
          <p className="mt-4 text-gray-600">Manage all hostel-related grievances efficiently and effectively.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="Hostel.jpg" alt="Hostel 1" className="w-full h-50 object-cover rounded-t-lg" />
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-700">Hostel Maintenance</h3>
              <button
                onClick={handleHostelMaintenanceClick}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Manage
              </button>
            </div>
            <p className="mt-2 text-gray-600">Address maintenance issues reported by students.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="Mess.jpg" alt="Mess" className="w-full h-50 object-cover rounded-t-lg" />
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-700">Mess Management</h3>
              <button
                onClick={() => navigate('/messComplaints')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Manage
              </button>
            </div>
            <p className="mt-2 text-gray-600">View students' comments.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminSide;
