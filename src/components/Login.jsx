import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css'
import { GetAuthHeader } from "../utils/Headers";

const LoginEx = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('Data to be sent:', data);

    try {
      const response = await axios.post('http://localhost:5000/login', data);

      if (response.data.status === 'success') {
        localStorage.setItem('jwtToken', response.data.token);
        const response2 = await fetch("http://localhost:5000/userType", {
          method: "GET",
          headers: GetAuthHeader()
        });

        const data = await response2.json();
        const userType = data.userType;
        console.log('userType = ', userType)

        if(userType === 'warden'){
          navigate('/admin');
        }
        else{
          navigate('/home');
        }
      } else {
        console.log('else');
        setData({ email: '', password: '' });
        throw new Error(JSON.stringify(response.data.message));
      }
    } catch (error) {
      console.log('AxiosError:', error);
      
      navigate('/');
    }
  };

  const [isStudentFormVisible, setIsStudentFormVisible] = useState(false);

  const handleToggleForm = () => {
    setIsStudentFormVisible(!isStudentFormVisible);
  };

  return (
    <div className="h-screen flex">
      {/* Light Lavender - 80% of page */}
        <div className="w-3/5 h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('img1.png')" }}>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold mb-8 font-serif ">GRIEVANCE MANAGEMENT SYSTEM</h1>
                    
                    <h2 className="text-2xl font-bold font-serif text-white">SVECW - VISHNUPUR</h2>
                </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-40"></div> 
        </div>

      {/* Dark Lavender - 20% of page */}
      <div className="w-2/5 bg-green-100">
        {/* Login Form */}
        <div className="flex justify-center items-center h-full">
          <div className="w-4/5 max-w-md p-8 bg-green-300 rounded-lg shadow-lg"> 
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">{isStudentFormVisible ? 'Student Login' : 'Employee Login'}</h2>
              <p className="text-lg text-gray-600">{isStudentFormVisible ? 'Login as a student' : 'Login as an employee'}</p>
            </div>
            <form onSubmit={submitHandler} autoComplete="off">
              <div className="mb-4">
                <input type="text" placeholder="Email Address" name="email" value={data.email} required onChange={changeHandler} className="w-full bg-gray-100 rounded py-2 px-4 focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <input type="password" placeholder="Password" name="password" value={data.password} required onChange={changeHandler} className="w-full bg-gray-100 rounded py-2 px-4 focus:outline-none focus:shadow-outline" />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-green-100"><Link to = '/verify'>Forgot password?</Link></div>
                <button type="submit" className="bg-green-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
              </div>
              <div className="text-center">
                <label className="cursor-pointer">
                  <input type="checkbox" className="mr-1" checked={isStudentFormVisible} onChange={handleToggleForm} />
                  {isStudentFormVisible ? 'Login as Employee' : 'Login as Student'}
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginEx;