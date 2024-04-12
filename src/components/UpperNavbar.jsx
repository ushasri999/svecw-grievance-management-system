import React from 'react';
import { useNavigate } from 'react-router-dom';

const UpperNavbar = () => {
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("jwtToken");
    navigate('/');
  };

  return (
    <header className="fixed left-0 right-0 bg-black text-white text-center py-2 flex items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center">
        <img src="vishnuLogo.png" alt="Logo" className="h-15 w-20 mr-4" />
        <h1 className="text-xl font-semibold">Grievance Management System</h1>
      </div>

      <div>
        <button onClick={logout} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full mr-2">
          Logout
        </button>
      </div>
    </header>
  );
};

export default UpperNavbar;