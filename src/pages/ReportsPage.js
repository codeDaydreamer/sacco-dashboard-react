import React from 'react';
import { Typography, Box } from '@mui/material';

const ReportsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ color: 'primary.main' }}>
        Reports
      </Typography>
      <Typography variant="body1">
        Generate and view reports here.
      </Typography>
    </Box>
  );
};

export default ReportsPage;
