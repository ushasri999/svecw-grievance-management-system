import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RecoveryContext } from './RecoveryContext';
import axios from 'axios';
import Header from './Header';

const Reset = () => {
  const { email } = useContext(RecoveryContext);
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const changeNewPassword = (e) => {
      setNewPassword(e.target.value);
    };
    
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    
    const resetPassword = async (e) => {
        e.preventDefault();
        console.log(email)

    try {
      // Check if new password and confirm password match
      if (newPassword === confirmPassword) {
        // You can send a request to your backend to update the password
        await axios.put('http://localhost:5000/update_password', {
          email,
          newPassword,
        });

        alert('Password updated successfully!');
        navigate('/');
      } else {
        setError('Passwords do not match');
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
            <form className="reset-password" onSubmit={resetPassword} autoComplete="off">
              <div className="field">
                <input
                  type="password"
                  placeholder="New Password"
                  name="newPassword"
                  value={newPassword}
                  required
                  onChange={changeNewPassword}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  required
                  onChange={changeConfirmPassword}
                />
              </div>
              {error && <div className="error">{error}</div>}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Reset Password" />
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

export default Reset;
