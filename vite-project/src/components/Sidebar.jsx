import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onNavigate, onLogout, toggleTheme, isDarkMode }) => {
  return (
    <div className="sidebar">
      <h2>Expense Tracker</h2>
      <ul>
        <li onClick={() => onNavigate('budget')}>📊 Budget</li>
        <li onClick={() => onNavigate('balance')}>💰 Current Balance</li>
        <li onClick={() => onNavigate('summary')}>📈 Income & Expenses</li>
        <li onClick={() => onNavigate('charts')}>📊 Charts</li>
        <li onClick={() => onNavigate('add')}>➕ Add Expense</li>
        <li onClick={() => onNavigate('accounts')}>👤 Accounts</li>
        <li onClick={() => onNavigate('profile')}>🧾 Profile</li>
        <li onClick={onLogout}>🚪 Logout</li>
        <li onClick={toggleTheme}>
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
