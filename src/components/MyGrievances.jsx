import React from 'react'
import { useEffect, useState } from "react";
import { GetAuthHeader } from "../utils/Headers";
import '../styles/tailwind.css'
import clsx from "clsx";


const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp ); 
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
    const date = new Date(timestamp ); 
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };


const MyGrievances = () => {

  const [complaints, setComplaints] = useState([]);

  const getComplaints = async (e) => {
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

  useEffect(() => {
    getComplaints();
  }, []);

  console.log(complaints);
  return (
    <div className="bg-gray-100 p-4 sm:p-8 md:p-10 h-screen">
      <h1 className="text-4xl font-bold mt-20 mb-8">Complaints</h1>
      {complaints.length === 0 ? (
        <p className="ml-4 mt-2 text-gray-600 text-xl">
          No complaints registered yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <div className="w-full overflow-x-scroll">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-center text-base font-medium text-black uppercase tracking-wider border">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3 text-center text-base font-medium text-black uppercase tracking-wider border">
                    Created At
                  </th>
                  <th scope="col" className="px-4 py-3 text-center text-base font-medium text-black uppercase tracking-wider border">
                    Completed At
                  </th>
                  <th scope="col" className="px-4 py-3 text-center text-base font-medium text-black uppercase tracking-wider border">
                    Description
                  </th>
                  <th scope="col" className="px-4 py-3 text-center text-base font-medium text-black uppercase tracking-wider border">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {complaints.map((complaint) => (
                  <tr key={complaint.complaint_id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-center text-base text-gray-500 border">
                      {complaint.complaint_name}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-base text-gray-500 border">
                      {formatTimestamp1(complaint.created_at)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-base text-gray-500 border">
                      {complaint.is_completed ? formatTimestamp(complaint.assigned_at) : '--------------'}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-base text-gray-500 border">
                      {complaint.description}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-base border">
                    <button
                        className={clsx(
                          "group flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-white transition text-base",
                          complaint.is_completed ? "bg-green-500" : "bg-red-600"
                        )}
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                      >
                        {complaint.is_completed ? "Solved" : "Pending"}
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
  
};  

export default MyGrievances;