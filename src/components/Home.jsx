import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdWorkHistory } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import Dashboard from "./Dashboard";
import RaiseComplaint from "./RaiseComplaint";
import MyGrievances from "./MyGrievances";
import WhichGrievance from "./WhichGreivance";
import MessComplaint from "./MessComplaint";

const Home = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('Dashboard'); // State to keep track of the current page

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get("currentPage");

    if(pageParam){
      setCurrentPage(pageParam);
    }
  }, [location]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwtToken");
    navigate('/');
  };

  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard, margin: true },
    { name: "My Grievances", link: "/mygrievances", icon: MdWorkHistory, margin: true },
    { name: "Contact", link: "/", icon: RiContactsLine, margin: true },
    { name: "Logout", link: "/", icon: FiLogOut, margin: true },
  ];

  const [open, setOpen] = useState(true);
  const [rightContainerMargin, setRightContainerMargin] = useState("ml-72");

  useEffect(() => {
    setRightContainerMargin(open ? "ml-72" : "ml-16");
  }, [open]);

  return (
    <section className="flex gap-6 items-center justify-center">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 fixed left-0 top-0`}
      >
        <div className="py-3 flex justify-end">    
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 cursor-pointer flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <div
              key={i}
              className={`${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              onClick={() => handlePageChange(menu.name)}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`text-white whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:px-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className={`content w-full ${rightContainerMargin}`}>
        {currentPage === 'Dashboard' && <Dashboard />}
        {currentPage === 'raiseComplaint' && <RaiseComplaint />}
        {currentPage === 'My Grievances' && <MyGrievances />}
        {currentPage === 'Contact' && <Dashboard />}
        {currentPage === 'Which Grievance' && <WhichGrievance />}
        {currentPage === 'Mess Complaint' && <MessComplaint/>}
        {currentPage === 'Logout' && logout() }
      </div>
    </section>
  );
};

export default Home;
