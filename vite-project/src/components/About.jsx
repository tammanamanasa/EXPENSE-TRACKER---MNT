// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: ' rgb(209, 229, 225)', // Add a soft background color (pastel or light shade)
        borderRadius: '8px',         // Optional: Adds rounded corners for a soft look
      }}
    >
      <h1>About Expense Tracker</h1>
      <p>
        <strong>Expense Tracker</strong> is a powerful, easy-to-use tool designed to help you take control of your personal finances. Whether you're saving for a goal or simply want to understand your spending habits, this app makes it easy to track and manage your money.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>Track income and expenses efficiently</li>
        <li>View monthly budget summaries</li>
        <li>Edit and delete entries as needed</li>
        <li>User-friendly, responsive interface</li>
      </ul>
      <p>
        By consistently tracking your finances, you'll gain valuable insights and develop better financial habits. Expense Tracker is your companion on the journey to smarter spending and saving.
      </p>
    </div>
  );
};

export default About;
