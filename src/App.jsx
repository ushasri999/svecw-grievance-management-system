import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Assuming you have a Login component
import Dashboard from './components/Dashboard';
import VerifyEmail from './components/VerifyEmail';
import OTPInput from './components/OTPInput';
import Reset from './components/Reset';
import { RecoveryProvider } from './components/RecoveryContext';
import RaiseComplaint from './components/RaiseComplaint';
import MyGrievances from './components/MyGrievances';
import Test from './components/Test';
import {ComplaintsPage, ComplaintForm} from './components/Complaint'

import './styles/tailwind.css'; // Assuming you have Tailwind CSS styles
import './css/Dashboard.css'; // Assuming you have your own CSS for Dashboard
import AdminPage from './components/AdminPage';
import Home from './components/Home';
import Popup from './components/Popup';
import CheckboxAlignment from './components/CheckboxAlignment';
import CheckBox from './components/CheckBox';
import WhichGrievance from './components/WhichGreivance';
import MessComplaints from './components/MessComplaint';
import MessComplaint from './components/MessComplaint';
import EmojiSlider from './components/EmojiSlider';
import FeedbackFormContent from './components/FeedbackFormContent';
import FeedbackForm from './components/FeedbackForm';
import AdminPage2 from './components/AdminPage2';
import AdminMessComplaints from './components/MessComplaintsAdmin';
import AdminSide from './components/Admin';
import Landing from './components/Landing';

const App = () => {
  return (
    <div className="App h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path = '/login' element = {<Login />} />
          <Route path = '/home' element = {<Home />} />
          <Route
            path="/verify"
            element={
              <RecoveryProvider>
                <VerifyEmail />
              </RecoveryProvider>
            }
          />
          <Route
            path="/otp"
            element={
              <RecoveryProvider>
                <OTPInput />
              </RecoveryProvider>
            }
          />
          <Route
            path="/reset"
            element={
              <RecoveryProvider>
                <Reset />
              </RecoveryProvider>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/raiseComplaint" element={<RaiseComplaint />} />
          <Route path="/mygrievances" element={<MyGrievances />} />
          <Route path="/test" element={<Test />} />
          <Route path="/complaintsPage" element={<ComplaintsPage />} />
          <Route path="/complaintsForm" element={<ComplaintForm />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin2" element={<AdminPage2 />} />
          <Route path="/pop" element={<Popup />} />
          <Route path="/check" element={<CheckboxAlignment />} />
          <Route path="/box" element={<CheckBox />} />
          <Route path="/raiseMessComplaint" element={<MessComplaint/>}/>
          <Route path="/whichgrievance" element={<WhichGrievance/>}/>
          <Route path="/emojislider" element={<EmojiSlider/>}/>
          <Route path="/fbc" element={<FeedbackFormContent/>}/>
          <Route path="/feedback" element={<FeedbackForm/>}/>
          <Route path="/messComplaints" element={<AdminMessComplaints/>}/>
          <Route path="/adminpage" element={<AdminSide/>}/>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
