import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/VerifyEmail.css';
import { RecoveryContext } from './RecoveryContext';
import { useEffect } from 'react';

const VerifyEmail = () => {
  const {email, setEmail, setOTP, otp} = useContext(RecoveryContext);
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    console.log('Updated OTP:', otp);
  }, [otp]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit handler called');
    console.log('message ', message);

    try {
      const response = await axios.get('http://localhost:5000/check_email', {
      params: { email }
    });

    console.log('response = ', response)

      if (response.data.status === 'success') {
        setEmail(email);
        console.log('email ', email);
        setMessage(response.data.message);
        const OTP = Math.floor(Math.random() * 9000 + 1000);
        console.log('OTP ', OTP);

        // Use the setOTP function callback to ensure that you are working with the most recent state
        setOTP(OTP)
        
        setOTP(OTP);
        console.log(otp);

        await axios.post("http://localhost:5000/send_email", {
          OTP,
          recipient_email: email,
        })
        
        // alert("should to to otp");
        navigate('/otp')
      } else {
        // alert("else");
        setError(response.data.message);
      }
    } catch (error) {
      console.error('AxiosError:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='page'>
        {/* <Header /> */}
    <div className="wrapper2">
      <div className="form-container">
        <div className="form-inner">
          <form className="forgot-password" onSubmit={submitHandler} autoComplete="off">
            <div className="field">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                value={email}
                required
                onChange={changeHandler}
                />
            </div>
            {error && <div className="error">{error}</div>}
            {message && <div className="success">{message}</div>}
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Send Reset Email" />
            </div>
            <div className="pass-link">
              <Link to="/">Back to Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VerifyEmail;
