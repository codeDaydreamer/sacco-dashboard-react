import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Paper, Typography } from '@mui/material';
import './PieChart.css'; // Import CSS

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Loans Approved', 'Loans Pending', 'Loans Rejected'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(0, 188, 212, 0.8)',  // Lighter blue
          'rgba(76, 175, 80, 0.8)',   // Green
          'rgba(244, 67, 54, 0.8)',   // Red
        ],
        hoverBackgroundColor: [
          'rgba(0, 150, 167, 1)',      // Darker blue on hover
          'rgba(56, 142, 60, 1)',      // Darker green on hover
          'rgba(198, 40, 40, 1)',      // Darker red on hover
        ],
      },
    ],
  };

  return (
    <Paper className="chart-container">
      <Typography variant="h6">Loan Status Distribution</Typography>
      <div className="canvas-container">
        <Pie data={data} options={{
          elements: {
            arc: {
              borderWidth: 2,
              borderColor: '#fff',
              backgroundColor: (context) => {
                const index = context[0]?.dataIndex;
                return index !== undefined ? 
                  ['rgba(0, 188, 212, 0.8)', 'rgba(76, 175, 80, 0.8)', 'rgba(244, 67, 54, 0.8)'][index] : 
                  undefined;
              },
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        }} />
      </div>
    </Paper>
  );
};

export default PieChart;
