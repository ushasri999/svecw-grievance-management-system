import React, { useState, useEffect } from 'react';
import { GetAuthHeader } from "../utils/Headers";
import '../styles/tailwind.css';
import UpperNavbar from './UpperNavbar';
import clsx from "clsx";

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

const AdminPage2 = () => {
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

  const handleApproval = async (complaint_id, status) => {
    try {
      console.log('complaint_id ', complaint_id);
      const response = await fetch(
        `http://localhost:5000/complaints/${complaint_id}`,
        {
          method: "PUT",
          headers: GetAuthHeader(),
          body: JSON.stringify({ status }),
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
      <div className="p-8">
        <h1 className="text-3xl font-bold mt-8 mb-6">Complaints</h1>
        {filteredComplaints.length === 0 ? (
          <p className="text-gray-600 text-lg">
            No complaints registered yet.
          </p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 shadow-lg overflow-hidden rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredComplaints.map((complaint) => (
                <tr key={complaint.complaint_id} className={clsx({'bg-gray-100': complaint.is_completed})}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{complaint.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatTimestamp1(complaint.created_at)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.assigned_at ? formatTimestamp(complaint.assigned_at) : ''}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <span className={clsx('px-2 inline-flex text-xs leading-5 font-semibold rounded-full', {'bg-green-100 text-green-800': complaint.is_completed, 'bg-red-100 text-red-800': !complaint.is_completed})}>
                      {complaint.is_completed ? 'Completed' : 'Not Completed'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                          id="options-menu"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          Update
                        </button>
                      </div>

                      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className="py-1" role="none">
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => handleApproval(complaint._id, 'Report')}
                          >
                            Report
                          </button>
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => handleApproval(complaint._id, 'Completed')}
                          >
                            Completed
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminPage2;
