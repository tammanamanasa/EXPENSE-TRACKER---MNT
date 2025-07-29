import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import CryptoJS from 'crypto-js'; // Import crypto-js for hashing
import './SignInPage.css';

const SignInPage = () => {
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState(null);

  // Handle Sign In Logic
  const handleSignIn = () => {
    if (!captchaValue) {
      alert('Please complete the CAPTCHA');
      return;
    }

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Retrieving stored accounts from localStorage
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    
    // Hash the input password using SHA256 to compare with the stored hashed password
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);
    
    // Find user by email and password match
    const user = existingAccounts.find(account => account.email === email && account.password === hashedPassword);

    if (user) {
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  // Handle captcha change
  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="signin-page">
      <div className="signin-form">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <div className="signin-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <ReCAPTCHA
          sitekey="6Lcr9DQrAAAAAJctbOIDbP3HG-z9UFWnIBfGfe1t" // Replace with your actual site key
          onChange={onCaptchaChange}
        />

        <button onClick={handleSignIn}>Sign In</button>
        <p>Don't have an account? <span onClick={() => navigate('/signup')} style={{ color: 'blue', cursor: 'pointer' }}>Sign Up</span></p>
      </div>
    </div>
  );
};

export default SignInPage;
