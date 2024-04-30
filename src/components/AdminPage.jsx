import React, { useState, useEffect } from 'react';
import { GetAuthHeader } from "../utils/Headers";
import '../styles/tailwind.css';
import UpperNavbar from './UpperNavbar';

const AdminPage = () => {
  const hostelNames = ["Bhargavi", "Bhuvana", "Neelima", "Nirmala", "Manasa", "Mrudula", "Rohini", "Revathi", "Spoorthi", "Vaidehi", "Gayathri", "Saradha", "Vaishnavi", "Rajeswari"];

  const [filterValue, setFilterValue] = useState('');
  
  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };
  
  const filteredHostelNames = hostelNames.filter(name => {
    // Convert both the filter value and hostel name to lowercase for case-insensitive filtering
    const lowercaseFilter = filterValue.toLowerCase();
    const lowercaseName = name.toLowerCase();
    // Return true if the hostel name includes the filter value
    return lowercaseName.includes(lowercaseFilter);
  });


  const [selectedHostels, setSelectedHostels] = useState([]);
  const handleHostelClick = (hostel) => {
    console.log('adding', hostel)
    const index = selectedHostels.indexOf(hostel);
    if (index === -1) {
      setSelectedHostels([...selectedHostels, hostel]);
    } else {
      const updatedHostels = [...selectedHostels];
      updatedHostels.splice(index, 1);
      setSelectedHostels(updatedHostels);
    }

    // toggleHostelMenu();
  };

  const [selectedStatus, setSelectedStatus] = useState(null);
  
  const handleStatusMenuItemClick = (status) => {
    console.log('came to set', status)
    setSelectedStatus(status);
    toggleStatusMenu(); // Close the status menu after selection (optional)
  };
  
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);
  const toggleStatusMenu = () => {
    setStatusMenuOpen(!statusMenuOpen);
  }; 

  const [hostelMenuOpen, setHostelMenuOpen] = useState(false);
  const toggleHostelMenu = () => {
    setHostelMenuOpen(!hostelMenuOpen);
  }; 

  const [curComplaintId, setCurComplaintId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [complaints, setComplaints] = useState([]);
  // const [showCompleted, setShowCompleted] = useState(null);

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

  const filteredComplaints = complaints.filter(complaint => {
    // If no menu item is selected, display all complaints
    if (selectedStatus === null && selectedHostels.length === 0) {
      return true;
    }
    // Filter by status
    if (selectedStatus !== null && complaint.status !== selectedStatus) {
      return false;
    }
    // Filter by selected hostels
    if (selectedHostels.length > 0 && !selectedHostels.includes(complaint.block_name)) {
      return false;
    }

    return true;
  });


  return (
    <div className='h-full'>
      <UpperNavbar />
      <div className="flex h-full" style={{ paddingTop: '80px' }}>
      <div className="w-full p-4 overflow-y-auto">
        <h1 className="text-3xl font-bold mt-8 mb-6">Complaints</h1>
          <div className='flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md border border-gray-200 dark:border-zinc-800'>
            <div className="h-1 rounded-tl-lg rounded-tr-lg dark:bg-dark-40 bg-[#09f3f1] bg-opacity-50" style={{ transform: 'translateY(-0.4px)' }}>
              <div className="h-full rounded-tl-lg rounded-tr-lg transition-all ease-in-out duration-300 bg-brand-50" style={{ width: '0%' }}></div>
            </div>

            <div className='px-3 py-2 '>
              <button class="flex items-center justify-between w-full group mb-1" aria-expanded="true">
                <div className="text-md  font-semibold text-brand">Here are the Complaints Details...</div>
              </button>
              
              <div class="mb-3 flex flex-col">
                <div class="flex w-full flex-wrap gap-2">

                    <div class="relative flex-1" data-headlessui-state={statusMenuOpen ? 'open' : ''}>
                        <div class="w-full">
                          <button class="bg-[#eaefee] items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5 bg-fill-3 dark:bg-dark-fill-3 text-label-2 dark:text-dark-label-2 hover:bg-fill-2 dark:hover:bg-dark-fill-2 active:bg-fill-3 dark:active:bg-dark-fill-3 flex w-full justify-between" id="headlessui-menu-button-:r4:" type="button" aria-haspopup="true"
                          data-headlessui-state={statusMenuOpen ? 'open' : ''}
                          aria-expanded={statusMenuOpen} 
                          onClick={toggleStatusMenu}fdprocessedid="o72tuq" aria-controls="headlessui-menu-items-:r5r:">
                              Status
                              {statusMenuOpen ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                className="w-4.5 h-4.5 ml-3 pointer-events-none transition duration-300 text-label-3 dark:text-dark-label-3 rotate-180 transform"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                className="w-4.5 h-4.5 ml-3 pointer-events-none transition duration-300 text-label-4 dark:text-dark-label-4"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            )}
                            </button>
                        </div>
                        <div className={`bg-[#f2f4f7] max-w-[15rem] min-w-[8.75rem] absolute z-dropdown mt-1 rounded-lg p-2 overflow-auto focus:outline-none shadow-level2 dark:shadow-dark-level2 bg-overlay-3 dark:bg-dark-overlay-3 max-h-[600px] transition ${statusMenuOpen ? 'ease-out duration-100 transform opacity-100 scale-100' : 'ease-in duration-75 transform opacity-0 scale-95 hidden'}`} aria-labelledby="headlessui-menu-button-:r4:" id="headlessui-menu-items-:r5r:" role="menu" tabIndex="0" style={{ zIndex: 999 }}>
                          <div className="cursor-pointer select-none relative h-8 py-1.5 pl-2 pr-12 text-label-1 dark:text-dark-label-1 rounded hover:bg-white dark:hover:bg-gray-800" id="headlessui-menu-item-:r5s:" role="menuitem" tabIndex="-1" 
                          onClick={() => handleStatusMenuItemClick(false)}
                          data-headlessui-state="">
                            <div class="flex h-5 items-center">
                              <div class="truncate">
                                <span class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="mr-1 h-[14px] w-[14px] text-orange dark:text-orange">
                                    <path fill-rule="evenodd" d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                  </svg>
                                  <span>Pending</span>
                                </span>
                              </div>
                            </div>
                            {(selectedStatus == false) && (
                                <span class="absolute inset-y-0 right-0 flex items-center pr-2 text-blue dark:text-blue">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z" clip-rule="evenodd"></path>
                                  </svg>
                                </span> 
                            )}
                          </div>

                          <div className="cursor-pointer select-none relative h-8 py-1.5 pl-2 pr-12 text-label-1 dark:text-dark-label-1 rounded hover:bg-white dark:hover:bg-gray-800" id="headlessui-menu-item-:r5s:" role="menuitem" tabIndex="-1" 
                          onClick={() => handleStatusMenuItemClick(true)}data-headlessui-state="">
                            <div class="flex h-5 items-center">
                              <div class="truncate">
                                <span class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="mr-1 h-[14px] w-[14px] text-darkgreen dark:text-darkgreen">
                                    <path fill-rule="evenodd" d="M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z" clip-rule="evenodd"></path>
                                  </svg>
                                  <span>Solved</span>
                                </span>
                              </div>
                            </div>
                            {selectedStatus && (
                              <span class="absolute inset-y-0 right-0 flex items-center pr-2 text-blue dark:text-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z" clip-rule="evenodd"></path>
                                </svg>
                              </span>
                            )}
                          </div>
                        </div>
                    </div>

                    <div class="relative flex-1" data-headlessui-state={hostelMenuOpen ? 'open' : ''}>
                      <div class="w-full">
                        <button class="bg-[#eaefee] items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5 bg-fill-3 dark:bg-dark-fill-3 text-label-2 dark:text-dark-label-2 hover:bg-fill-2 dark:hover:bg-dark-fill-2 active:bg-fill-3 dark:active:bg-dark-fill-3 flex w-full justify-between" id="headlessui-menu-button-:r4:" type="button" aria-haspopup="true"
                        data-headlessui-state={hostelMenuOpen ? 'open' : ''}
                        aria-expanded={hostelMenuOpen} 
                        onClick={toggleHostelMenu}fdprocessedid="o72tuq" aria-controls="headlessui-menu-items-:r5r:">
                            Hostel
                            {hostelMenuOpen ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              className="w-4.5 h-4.5 ml-3 pointer-events-none transition duration-300 text-label-3 dark:text-dark-label-3 rotate-180 transform"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              className="w-4.5 h-4.5 ml-3 pointer-events-none transition duration-300 text-label-4 dark:text-dark-label-4"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          )}
                        </button>
                        <div class={`bg-[#f2f4f7] md:max-w-[400px] transform translate-x-[-85%] left-[60%] md:-translate-x-1/2 md:left-1/2 lg:-translate-x-0 lg:left-0 absolute w-max max-w-xs z-dropdown mt-1 p-2.5 rounded-lg focus:outline-none bg-overlay-3 dark:bg-dark-overlay-3 shadow-level3 dark:shadow-dark-level3 ${hostelMenuOpen ? 'ease-out duration-100 transform opacity-100 scale-100' : 'ease-in duration-75 transform opacity-0 scale-95 hidden'}`}  style={{ zIndex: 999 }} tabindex="-1" data-headlessui-state="open" id="headlessui-popover-panel-:r8k:">
                          <div class="overflow-hidden">
                            <div>
                              <div class="relative rounded-md input_input-container__SZzNg">
                                <div class="absolute inset-y-0 flex items-center pl-3 text-gray-6 dark:text-dark-gray-6 pointer-events-none left-0">
                                  <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="w-4 h-4">
                                      <path fill-rule="evenodd" d="M5.527 5.527a7.5 7.5 0 0111.268 9.852l3.581 3.583a1 1 0 01-1.414 1.415l-3.582-3.583A7.501 7.501 0 015.527 5.527zm1.414 1.414a5.5 5.5 0 107.779 7.779A5.5 5.5 0 006.94 6.94z" clip-rule="evenodd"></path>
                                    </svg>
                                  </span>
                                </div>
                                <input class="bg-white block w-full rounded-md leading-5 outline-none placeholder:text-label-4 dark:placeholder:text-dark-label-4 border-none py-1.5 text-label-2 dark:text-dark-label-2 bg-fill-3 dark:bg-dark-fill-3 focus:bg-fill-2 dark:focus:bg-dark-fill-2 pl-9 pr-3 sentry-unmask" autocomplete="off" type="text" placeholder="Filter hostels" fdprocessedid="jj9exg"
                                value={filterValue} 
                                onChange={handleInputChange}
                                style={{ 
                                  // Example styles:
                                  fontSize: '14px', // Adjust the font size as needed
                                  fontWeight: 'normal', // Adjust the font weight as needed
                                  color: '#333', // Adjust the text color as needed
                                  textTransform: 'capitalize',
                                }}  ></input>
                              </div>
                            </div>

                            <div class="mt-4">
                              <div class="block">
                                <div class="-m-1 mt-1 flex max-h-[400px] flex-wrap overflow-auto py-4">
                                  {filteredHostelNames.map((name, index) => (
                                    <span key={index} data-slug="" data-name="" 
                                    className={`inline-flex items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3 cursor-pointer transition-all m-1 
                                    ${selectedHostels.includes(name) ? 'bg-[#00eff3]' : 'bg-white hover:bg-[#faebd7]'} `}
                                    onClick={() => handleHostelClick(name)}>
                                        {name}
                                    </span>
                                ))}

                                </div>
                              </div>

                              <hr class="border-divider-2 dark:border-dark-divider-2" />
                              <div class="mt-2.5 flex flex-row-reverse px-2 py-0.5">
                                  <div class="flex items-center space-x-1 outline-none text-label-3 dark:text-dark-label-3 cursor-pointer">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="h-4 w-4">
                                    <path fill-rule="evenodd" d="M5.725 9.255h2.843a1 1 0 110 2H3.2a1 1 0 01-1-1V4.887a1 1 0 012 0v3.056l2.445-2.297a9.053 9.053 0 11-2.142 9.415 1 1 0 011.886-.665 7.053 7.053 0 1010.064-8.515 7.063 7.063 0 00-8.417 1.202L5.725 9.255z" clip-rule="evenodd"></path>
                                  </svg>
                                  {/* <span>Reset</span> */}
                                  <span
                                  onClick={() => setSelectedHostels([])}
                                  className="cursor-pointer transition-all hover:underline"
                                  >
                                    Reset
                                  </span>
                                
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    
                </div>
              </div>


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
                                    {complaint.status ? 'Solved' : 'Pending'}
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
                                                >Mark as Solved</button>
                                                
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
      </div>
      </div>
    </div>
  );
}

export default AdminPage;