import React, { useState, useEffect } from 'react';
import { GetAuthHeader } from "../utils/Headers";
import '../styles/tailwind.css';
import clsx from "clsx";
import UpperNavbar from './UpperNavbar';

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp); 
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const formatTimestamp1 = (timestamp) => {
  const date = new Date(timestamp); 
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const AdminPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [showCompleted, setShowCompleted] = useState(null);

  const getComplaints = async () => {
    try {
      const response = await fetch("http://localhost:5000/complaints", {
        method: "GET",
        headers: GetAuthHeader(),
      });
      const jsonData = await response.json();
      setComplaints(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleApproval = async (complaint_id) => {
    try {
      console.log('complaint_id ', complaint_id);
      const response = await fetch(
        `http://localhost:5000/complaints/${complaint_id}`,
        {
          method: "PUT",
          headers: GetAuthHeader(),
        }
      );
      // Handle response as needed

      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getComplaints();
  }, []);

  const filteredComplaints = showCompleted == null ? complaints : showCompleted ? complaints.filter(complaint => complaint.is_completed) : complaints.filter(complaint => !complaint.is_completed);

  return (
    
    <div className=''>
      <UpperNavbar />
      
      
      <div className="flex h-4/5" style={{ paddingTop: '80px' }}>
        <div className="w-4/5 p-4 overflow-y-auto">
          <h1 className="text-3xl font-bold mt-8 mb-6">Complaints</h1>
          {filteredComplaints.length === 0 ? (
            <p className="text-gray-600 text-lg">
              No complaints registered yet.
            </p>
          ) : (
            <div className='flex '>
              <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
                {filteredComplaints.map((complaint) => (
                  <div key={complaint.complaint_id} className="rounded-md border border-gray-200 bg-white hover:border-gray-400 overflow-hidden p-4">
                    <div className="p-8">
                      <h2 className="text-lg mb-4 font-semibold text-gray-900 hover:text-black">
                        {complaint.complaint_name}
                      </h2>
                      <p className="text-sm text-gray-900 mb-2">
                        Created on {formatTimestamp1(complaint.created_at)}
                      </p>
                      {complaint.assigned_at && (
                        <p className="text-sm text-gray-600 mb-2">
                          Completed on {formatTimestamp(complaint.assigned_at)}
                        </p>
                      )}
                      <p className="text-sm leading-relaxed text-gray-700 mb-4">
                        {complaint.description}
                      </p>
                      <button
                        className={`w-full py-2 rounded font-bold text-white transition duration-300 ${
                          complaint.is_completed ? 'bg-green-500 hover:bg-green-600' : 'bg-red-600 hover:bg-red-700'
                        }`}
                        onClick={() => handleApproval(complaint._id)}
                      >
                        {complaint.is_completed ? 'Completed' : 'Not Completed'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-1/5 flex flex-col bg-black text-white h-full w-1/5 fixed right-0" style={{ width: "20%" }}>
          <div className="p-4 overflow-y-auto">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Status</h3>

              <div className='ml-10percent' style = {{marginLeft: "10%"}}>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-white" checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} />
                  <span className="ml-2"  style={{ marginLeft: "2%" }}>Solved</span>
                </label>
                <br />
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-white" checked={!showCompleted} onChange={() => setShowCompleted(!showCompleted)} />
                  <span className="ml-2"  style={{ marginLeft: "2%" }}>Unsolved</span>
                </label>

              </div>
            </div>

            {/* <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Status</h3>

              <div className='ml-10percent' style = {{marginLeft: "10%"}}>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-white" checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} />
                  <span className="ml-2">Solved</span>
                </label>
                <br />
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-white" checked={!showCompleted} onChange={() => setShowCompleted(!showCompleted)} />
                  <span className="ml-2">Unsolved</span>
                </label>

              </div>
            </div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
