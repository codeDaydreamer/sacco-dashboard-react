import React from "react";
import { Line } from "react-chartjs-2";
import { Paper, Typography } from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import './LoanStatsChart.css';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const LoanStatsChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Loans Disbursed",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "#00bcd4",
        tension: 0.5, // Smooth line
      },
    ],
  };

  return (
    <Paper className="loan-stats-chart">
    <Typography variant="h6">Loan Disbursement Over Time</Typography>
    <div className="canvas-container">
      <Line data={data} />
    </div>
  </Paper>
  
  );
};

export default LoanStatsChart;
