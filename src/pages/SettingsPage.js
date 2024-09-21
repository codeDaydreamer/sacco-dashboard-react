import React from 'react';
import { Typography, Box } from '@mui/material';

const SettingsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ color: 'primary.main' }}>
        Settings
      </Typography>
      <Typography variant="body1">
        Adjust your settings here.
      </Typography>
    </Box>
  );
};

export default SettingsPage;
