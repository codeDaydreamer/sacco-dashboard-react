import React from 'react';
import { Typography, Box } from '@mui/material';

const MembersPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ color: 'primary.main' }}>
        Members
      </Typography>
      <Typography variant="body1">
        Manage your members here.
      </Typography>
    </Box>
  );
};

export default MembersPage;
