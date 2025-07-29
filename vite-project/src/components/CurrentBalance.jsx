// components/CurrentBalance.jsx
import React from "react";

const CurrentBalance = () => {
  const income = 20000;
  const expenses = 13000;
  const balance = income - expenses;

  return (
    <div className="bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 p-4 rounded-xl shadow mb-4">
      <h2 className="text-xl font-bold">Current Balance</h2>
      <p className="text-2xl font-semibold mt-2">₹{balance}</p>
    </div>
  );
};

export default CurrentBalance;