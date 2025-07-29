// components/CategoryExpenseChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryExpenseChart = () => {
  const data = {
    labels: ["Food", "Travel", "Bills", "Shopping"],
    datasets: [
      {
        data: [3000, 2000, 5000, 3000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9B59B6"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,  // Allows control of the chart's aspect ratio
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-4" style={{ height: "250px", width: "100%" }}>
      <h2 className="text-xl font-bold mb-2">Category-wise Expenses</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CategoryExpenseChart;