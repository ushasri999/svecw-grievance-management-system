import React, { useState, useEffect } from 'react';
import { GetAuthHeader } from "../utils/Headers";
import '../styles/tailwind.css';
import UpperNavbar from './UpperNavbar';

const AdminPage2 = () => {
  const [curComplaintId, setCurComplaintId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [complaints, setComplaints] = useState([]);
  const [showCompleted, setShowCompleted] = useState(null);

  const getComplaints = async () => {
    try {
      const response = await fetch("http://localhost:5000/complaints", {
        method: "GET",
        headers: GetAuthHeader(),
      });
      const jsonData = await response.json();
      // console.log(JSON.stringify(jsonData, null, 2));
      setComplaints(jsonData); // Set jsonData directly to the state
      console.log('complaints ', complaints);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleApproval = async (complaint_id) => {
    try {
      console.log('Handling approval for ID:', complaint_id);
  
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
      <div className="w-full p-4 overflow-y-auto">
        <h1 className="text-3xl font-bold mt-8 mb-6">Complaints</h1>
        {filteredComplaints.length === 0 ? (
          <p className="text-gray-600 text-lg">
            No complaints registered yet.
          </p>
        ) : (
          <div className='flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md border border-gray-200 dark:border-zinc-800'>
            <div className="h-1 rounded-tl-lg rounded-tr-lg dark:bg-dark-40 bg-[#09f3f1] bg-opacity-50" style={{ transform: 'translateY(-0.4px)' }}>
              <div className="h-full rounded-tl-lg rounded-tr-lg transition-all ease-in-out duration-300 bg-brand-50" style={{ width: '0%' }}></div>
            </div>

            <div className='px-3 py-2 '>
              <button class="flex items-center justify-between w-full group mb-1" aria-expanded="true">
                <div className="text-md  font-semibold text-brand">Here are the Complaints Details...</div>
              </button>

              <div class="text-sm dark:text-zinc-300 false">
                <div class="p-2">
                  <div class="  font-primary  relative">
                    <div class=" bg-white dark:bg-dark border-2  dark:border-dark_40 rounded-xl">
                      <div class="overflow-x-auto">
                        <table class="table-auto w-full  divide-y  divide-gray-200">
                          <thead class="text-xs  text-[#8C8C8C] ">
                            <tr>
                              <th class="px-2 border-r-2  dark:border-dark_40 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <p class="text-[17px] font-semibold text-center">Student ID</p>
                              </th>
                              <th class="px-2 border-r-2  dark:border-dark_40  first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <p class="text-[17px] font-semibold text-center">Complaint Name</p>
                              </th>
                              <th class="px-2 border-r-2 dark:border-dark_40 w-1/3 first:pl-10 last:pr-10 py-3 whitespace-nowrap">
                                <p class="text-[17px] font-semibold flex items-start">Complant Description</p>
                              </th>
                              <th class="px-2 border-r-2  w-1/6 dark:border-dark_40 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <p class="text-[17px] font-semibold text-center">Block</p>
                              </th>
                              <th class="px-3 dark:border-dark_40 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <p class="text-[17px] font-semibold text-center">Status</p>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="text-[13px]">
                          {filteredComplaints.map((complaint, index) => {
                            return (
                            
                            <tr class="border-t-2 border-b-2 last:border-b-0  dark:border-dark_40">
                              <td class="px-2 border-r-2  dark:border-dark_40 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                <div className="font-medium  text-gray-800 dark:text-zinc-200 flex justify-start items-start">
                                <p className='text-[13px] '>{complaint._id}</p>
                                </div>
                              </td>
                              <td class="px-2 border-r-2  dark:border-dark_40 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                <div className="font-medium  text-gray-800 dark:text-zinc-200 flex justify-start items-start">
                                <p className='text-[13px] '>{complaint.usn}</p>
                                </div>
                              </td>
                              <td class="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap flex justify-center items-center">
                                <div className="font-medium text-gray-800 dark:text-zinc-200 flex justify-start items-start">
                                <p className='text-[13px] '>{complaint.complaint_name}</p>
                                </div>
                              </td>

                              <td className="px-2 border-l-2  dark:border-dark_40 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-800 dark:text-zinc-200 flex justify-start items-start">
                                <p className='text-[13px] '>{complaint.description}</p>
                                </div>
                              </td>


                              <td class="px-2 border-l-2  dark:border-dark_40 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-800 dark:text-zinc-200 flex justify-start items-start">
                                <p className='text-[13px] '>{complaint.block_name} - {complaint.room}</p>
                                </div>
                              </td>

                                <td className="px-2 border-l-2 dark:border-dark_40 first:pl-5 last:pr-4 py-4 whitespace-nowrap">
                                  <div className="flex justify-center cursor-pointer items-center">
                                  <button 
                                    className={`text-md rounded-lg relative inline-flex items-center justify-center px-3.5 py-2 m-1  border-b-2 border-l-2 border-r-2 
                                                ${complaint.status ? 'cursor-not-allowed' : 'cursor-pointer'}
                                                ${complaint.status ? 'bg-gradient-to-tr from-green-600 to-green-500 hover:from-green-500 hover:to-green-500 border-green-700' 
                                                                    : 'active:border-brand active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 border-red-700'} 
                                                text-white`}
                                                onClick={(event) => {
                                                  if (!complaint.status) {
                                                    setCurComplaintId(complaint._id); // Set the current complaint ID
                                                    openModal(); // Open the modal
                                                  }
                                                }}
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
                                                <button type="submit" className={`text-md rounded-lg relative inline-flex items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-2 border-l-2 border-r-2 active:border-brand active:shadow-none shadow-lg bg-gradient-to-tr from-red-500 to-red-500 hover:from-red-400 hover:to-red-400 border-red-600 text-white" fdprocessedid="hyryfr" `} 
                                                id={curComplaintId}
                                                value={curComplaintId}
                                                onClick={(event) => {
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
                          })
                          }

                          </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

          </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default AdminPage2;
