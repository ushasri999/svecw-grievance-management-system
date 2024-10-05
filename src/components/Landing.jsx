import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css';

const Landing = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <nav className="max-w-screen-lg mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="vishnuWhiteLogo.jpg" alt="Logo" className="h-10 w-10 mr-4" />
            <div className="text-3xl font-semibold">Grievance Management System</div>
          </div>
          <button className="px-6 py-2 text-sm font-medium text-white bg-violet-100 rounded-full hover:bg-blue-600 transition duration-300" onClick={handleLoginClick}>
            LOGIN
        </button>
      </nav>

      <header className="section__container header__container">
        <h1 className="section__header">Report and Resolve<br />Your Issues Efficiently</h1>
        <img src="header.jpeg" alt="header" />
      </header>

      <section className="section__container plan__container">
        <p className="subheader">SUPPORT SERVICES</p>
        <h2 className="section__header">Manage Grievances Effectively</h2>
        <p className="description">
          Get assistance with your issues and see what to expect during the resolution process.
        </p>
        <div className="plan__grid">
          <div className="plan__content">
            <span className="number">01</span>
            <h4>Grievance Policy Overview</h4>
            <p>
              Stay informed about the grievance policies to ensure a smooth and fair resolution process.
            </p>
            <span className="number">02</span>
            <h4>Support Services</h4>
            <p>
              Access comprehensive support services designed to help you resolve your issues efficiently.
            </p>
            <span className="number">03</span>
            <h4>Contact Information</h4>
            <p>
              Find the right contact information to get in touch with the appropriate department for your issue.
            </p>
          </div>
          <div className="plan__image">
            <img src="land4.jpg" alt="plan" />
            <img src="land3.jpg" alt="plan" />
            <img src="land6.jpg" alt="plan" />
          </div>
        </div>
      </section>

      <section className="memories">
        <div className="section__container memories__container">
          <div className="memories__header">
            <h2 className="section__header">
              Grievance Cases and Resolutions
            </h2>
          </div>
          <div className="memories__grid">
            <div className="memories__card">
              <span><i className="ri-calendar-2-line"></i></span>
              <h4>Case 1: Maintenance Issue</h4>
              <p>
                A detailed overview of how a maintenance issue was resolved quickly and efficiently.
              </p>
            </div>
            <div className="memories__card">
              <span><i className="ri-shield-check-line"></i></span>
              <h4>Case 2:  Food Opinions</h4>
              <p>
                We look into students opinions on Food in canteens, To keep Them happy.
              </p>
            </div>
            <div className="memories__card">
              <span><i className="ri-bookmark-2-line"></i></span>
              <h4>Case 3: General Grievance</h4>
              <p>
                Resolution of a general grievance ensuring fairness and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container lounge__container">
        <div className="lounge__image">
          <img src="land1.jpg" alt="lounge" />
          <img src="land2.jpg" alt="lounge" />
        </div>
        <div className="lounge__content">
          <h2 className="section__header">Safe and Comfortable Environment</h2>
          <div className="lounge__grid">
            <div className="lounge__details">
              <h4>Tranquility Space</h4>
              <p>Our hostel offers serene spaces for relaxation and reflection.</p>
            </div>
            <div className="lounge__details">
              <h4>24/7 Support</h4>
              <p>We provide round-the-clock support to address any issues promptly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
