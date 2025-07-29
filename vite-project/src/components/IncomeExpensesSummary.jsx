// components/IncomeExpensesSummary.jsx
import React from "react";

const IncomeExpensesSummary = () => {
  const income = 20000;
  const expenses = 13000;
  const balance = income - expenses;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Income & Expenses Summary</h2>
      <p>Income: ₹{income}</p>
      <p>Expenses: ₹{expenses}</p>
      <p className="font-semibold mt-2">Balance: ₹{balance}</p>
    </div>
  );
};

export default IncomeExpensesSummary;