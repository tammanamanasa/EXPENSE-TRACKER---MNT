import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MonthlySpendingGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [{
      label: "Monthly Expenses",
      data: [10000, 12000, 9500, 11000],
      borderColor: "#4F46E5",
      backgroundColor: "#A5B4FC",
    }],
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
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-4" style={{ height: "350px", width: "80%" }}>
      <h2 className="text-xl font-bold mb-2">Monthly Spending</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default MonthlySpendingGraph;