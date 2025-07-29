import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountsPage.css';

const AccountsPage = () => {
  const navigate = useNavigate();
  const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Saved Accounts</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{acc.email}</td>
              <td>{acc.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <button className="back-button" onClick={() => navigate('/dashboard')}>
  ⬅ Back to Dashboard
</button>

    </div>
  );
};

export default AccountsPage;
