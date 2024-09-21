import React from 'react';
import { Typography, Box } from '@mui/material';

const TransactionsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ color: 'primary.main' }}>
        Transactions
      </Typography>
      <Typography variant="body1">
        View and manage transactions here.
      </Typography>
    </Box>
  );
};

export default TransactionsPage;
