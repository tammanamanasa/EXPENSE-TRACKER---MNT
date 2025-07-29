import './FormStyle.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CryptoJS from 'crypto-js'; // Importing crypto-js for hashing

const SignUpPage = () => {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle Sign Up Logic
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Hashing the password using SHA256
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);

    // Retrieving email and other inputs
    const email = document.querySelector('input[type="email"]').value;
    const fullName = document.querySelector('input[type="text"]').value;
    const phoneNumber = document.querySelector('input[type="tel"]').value;
    const dob = document.querySelector('input[type="date"]').value;

    // Saving account details to localStorage (for now)
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    existingAccounts.push({ email, fullName, phoneNumber, dob, password: hashedPassword });
    localStorage.setItem("accounts", JSON.stringify(existingAccounts));

    alert("Account created successfully!");
    navigate('/dashboard');
  };

  // Handle OTP sending (for now just simulate sending)
  const handleSendOTP = () => {
    alert('OTP sent to your phone number!');
    setOtpSent(true);
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Navigate to sign-in page
  const goToSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="signin-page">
      <div className="signin-form">
        <h2>Create an Account</h2>
        <input type="text" placeholder="Enter your full name" />
        <input type="email" placeholder="Enter your email" />
        <input
          type="tel"
          placeholder="Enter your phone number"
          pattern="[6-9]{1}[0-9]{9}"
          title="Enter a valid 10-digit Indian phone number"
        />
        <button onClick={handleSendOTP}>Send OTP</button>

        {otpSent && (
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength={6}
            pattern="\d{6}"
            title="Enter the 6-digit OTP"
            onChange={handleOtpChange}
          />
        )}

        <input type="date" placeholder="Enter your date of birth" />

        {/* Password Input */}
        <input 
          type="password" 
          placeholder="Enter your password" 
          onChange={(e) => setPassword(e.target.value)} 
        />

        {/* Confirm Password Input */}
        <input 
          type="password" 
          placeholder="Re-enter your password" 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />

        <div className="signin-options">
          <label>
            <input type="checkbox" /> Agree to Terms and Conditions
          </label>
        </div>

        <button onClick={handleSignUp}>Sign Up</button>
        <p>
          Already have an account?{' '}
          <span onClick={goToSignIn} style={{ color: 'blue', cursor: 'pointer' }}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
