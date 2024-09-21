import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './RecentTransactions.css'; // Import your CSS file
import { Paper, Typography } from '@mui/material';
import { useTheme } from '../../ThemeContext'; // Import the theme context

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'member', headerName: 'Member', width: 150 },
  { 
    field: 'amount', 
    headerName: 'Amount', 
    width: 130,
    valueFormatter: ({ value }) => {
      return value ? `$${value.toLocaleString()}` : '$0'; // Check for undefined
    }
  },
];

const rows = [
  { id: 1, date: '2024-01-01', member: 'John Doe', amount: 5000 },
  { id: 2, date: '2024-01-03', member: 'Jane Smith', amount: 12000 },
];

const RecentTransactions = () => {
  const { theme } = useTheme(); // Access the theme context

  return (
    <Paper className="recent-transactions" elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" className="recent-transactions-header">
        Recent Transactions
      </Typography>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: theme.palette.background.paper, // Use theme color
              color: theme.palette.text.primary, // Use theme text color
              fontWeight: 'bold',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${theme.palette.divider}`, // Use theme divider color
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: theme.palette.action.hover, // Use theme hover color
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: theme.palette.background.paper, // Use theme color
              color: theme.palette.text.primary, // Use theme text color
            },
          }}
        />
      </div>
    </Paper>
  );
};

export default RecentTransactions;
