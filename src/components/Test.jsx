import React, { useState, useEffect } from 'react';
import { GetAuthHeader } from "../utils/Headers";
import '../styles/tailwind.css';
import UpperNavbar from './UpperNavbar';

const Test = () => {
  const [curComplaintId, setCurComplaintId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }; 
  const [complaints, setComplaints] = useState([]);

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
      const response = await fetch(
        `http://localhost:5000/complaints/${complaint_id}`,
        {
          method: "PUT",
          headers: GetAuthHeader(),
        }
      );
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getComplaints();
  }, []);

  return (
    <div>
      <UpperNavbar />
      <div style={{ paddingTop: '80px' }}>
        <h1>Complaints</h1>
        {complaints.length === 0 ? (
          <p>No complaints registered yet.</p>
        ) : (
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={cellStyle}>Complaint ID</th>
                <th style={cellStyle}>Student ID</th>
                <th style={cellStyle}>Complaint Name</th>
                <th style={cellStyle}>Complaint Description</th>
                <th style={cellStyle}>Block</th>
                <th style={cellStyle}>Status</th>
                <th style={cellStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => {
              // var curComplaintId = complaint._id;
              return(
                <tr key={complaint._id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={cellStyle}>{complaint._id}</td>
                  <td style={cellStyle}>{complaint.usn}</td>
                  <td style={cellStyle}>{complaint.complaint_name}</td>
                  <td style={cellStyle}>{complaint.description}</td>
                  <td style={cellStyle}>{complaint.block_name} - {complaint.room}</td>
                  <td style={cellStyle}>
                    {/* <button type="submit" className={`border rounded
                                          ${complaint.status ? 'cursor-not-allowed' : 'cursor-pointer'}
                                          ${complaint.status ? 'bg-green-500' : 'bg-red-500'} 
                                          text-white`}
                                          onClick={() => handleApproval(complaint._id)}>
                    {complaint.status ? 'Completed' : 'Not Completed'}
                    </button> */}
                    <div className="flex justify-center cursor-pointer items-center">
                                  <button 
                                    className={`text-md rounded-lg relative inline-flex items-center justify-center px-3.5 py-2 m-1  border-b-2 border-l-2 border-r-2 
                                                ${complaint.status ? 'cursor-not-allowed' : 'cursor-pointer'}
                                                ${complaint.status ? 'bg-gradient-to-tr from-green-600 to-green-500 hover:from-green-500 hover:to-green-500 border-green-700' 
                                                                    : 'active:border-brand active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 border-red-700'} 
                                                text-white`}
                                                onClick={(event) => {
                                                  if (!complaint.status) {
                                                    event.stopPropagation(); // Prevent event from bubbling
                                                    event.preventDefault(); // Prevent default form submission
                                                    setCurComplaintId(complaint._id); // Set the current complaint ID
                                                    alert(complaint._id);
                                                    alert(`Button clicked for complaint ID: ${curComplaintId}`);
                                                    openModal(); // Open the modal
                                                  }
                                                }}
                                                // onClick={(event)=>{complaint.status ? undefined : {
                                                //   event.stopPropagation(); // Prevent event from bubbling
                                                //   event.preventDefault(); // Prevent default form submission
                                                //   setCurComplaintId(complaint._id); // Set the current complaint ID
                                                //   alert(complaint._id);
                                                //   alert(`Button clicked for complaint ID: ${curComplaintId}`);
                                                //   openModal(); // Open the modal
                                                // }}
                                  >
                                    {complaint.status ? 'Completed' : 'Not Completed'}
                                  </button>
                                    {isModalOpen && (
                                      <>
                                      <div className="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity exit-done" aria-hidden="true">
                                      </div>
                                      <div id="notes-modal" className="fixed inset-0 z-50 flex items-center my-4 justify-center transform px-4 sm:px-6 exit-done">
                                        <div class="bg-white dark:bg-dark_50 rounded-xl shadow-lg overflow-y-auto max-w-[875px] w-full  max-h-full border border-gray-200 dark:border-zinc-800">
                                          <div className="px-5 py-3 border-b border-zinc-200 dark:border-zinc-700 h-full">
                                            <div className="flex justify-between items-center">
                                              <div className="font-semibold text-zinc-800 dark:text-zinc-100 text-xl">Leave your comment here</div>
                                              <button className="text-md rounded-lg relative inline-flex items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-2 border-l-2 border-r-2 active:border-brand active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 border-red-700 text-white" onClick={closeModal}>Close</button>
                                            </div>
                                          </div>
                                          <form className="flex flex-col">
                                            <div className="px-5 py-4">
                                              <textarea name="note" id="rvrslinkdlist" className="form-textarea w-full h-[440px] px-2 py-1 rounded-xl border border-zinc-200 dark:border-zinc-700" rows="4" defaultValue="Your issue has been resolved."></textarea>
                                            </div>
                                            <div className="px-5 dark:border-zinc-700 mb-4">
                                              <div className="flex flex-wrap justify-end space-x-2">
                                                {/* <button type="submit" className="btn-brand-2 " fdprocessedid="hyryfr">Save</button> */}
                                                <button type="submit" className={`text-md rounded-lg relative inline-flex items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-2 border-l-2 border-r-2 active:border-brand active:shadow-none shadow-lg bg-gradient-to-tr from-red-500 to-red-500 hover:from-red-400 hover:to-red-400 border-red-600 text-white" fdprocessedid="hyryfr" `} 
                                                id={curComplaintId}
                                                value={curComplaintId}

                                                onClick={(event) => {
                                                  event.stopPropagation(); // Prevent event from bubbling
                                                  event.preventDefault(); // Prevent default form submission
                                                  alert(`Button clicked for complaint ID: ${curComplaintId}`);
                                                  handleApproval(curComplaintId);
                                                }}
                                                >Mark as Completed</button>
                                                
                                                <button type="button" className="ml-2 text-gray-500" fdprocessedid="vbzuaj" onClick={closeModal}>Cancel</button>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </>
                                    )}
                                  </div>
                  </td>
                </tr>
              );
            }
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const cellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

export default Test;
