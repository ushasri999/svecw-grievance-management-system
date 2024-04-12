import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RecoveryContext } from './RecoveryContext';
import Header from './Header';

const OTPInput = () => {
  const {otp} = useContext(RecoveryContext);
  const navigate = useNavigate();

  const [enteredOTP, setEnteredOTP] = useState('');
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
      setEnteredOTP(e.target.value);
      console.log(otp)
      console.log(enteredOTP)
  };

  const verifyOTP = async (e) => {
    e.preventDefault();

    try {
      if (enteredOTP == otp) {
        navigate('/reset');
      } else {
        setError('Incorrect OTP');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='page'>
        {/* <Header /> */}
    <div className="wrapper2">
      <div className="form-container">
        <div className="form-inner">
          <form className="verify-otp" onSubmit={verifyOTP} autoComplete="off">
            <div className="field">
              <input
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={enteredOTP}
                required
                onChange={changeHandler}
                />
            </div>
            {error && <div className="error">{error}</div>}
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Verify OTP" />
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

export default OTPInput;
