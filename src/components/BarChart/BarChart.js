import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Paper, Typography } from '@mui/material';
import './BarChart.css'; // Import CSS

// Register the necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Loans Disbursed',
        data: [65, 59, 80, 81],
        backgroundColor: '#00bcd4',
      },
    ],
  };

  return (
    <Paper className="chart-container">
      <Typography variant="h6">Loans Disbursed Over Months</Typography>
      <Bar data={data} />
    </Paper>
  );
};

export default BarChart;
