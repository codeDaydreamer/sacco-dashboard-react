import React from 'react';
import { useTheme } from '../../ThemeContext'; // Adjust the path as needed
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const { theme } = useTheme(); // Access the theme from context

  return (
    <footer
      style={{
        backgroundColor: theme.palette.background.paper, // Use the theme's background color
        color: theme.palette.text.primary, // Use the theme's text color
        padding: '30px 20px',
        textAlign: 'left',
        marginTop: 'auto', // Ensure it stays at the bottom
      }}
    >
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" maxWidth="1200px" margin="0 auto">
        {/* Quick Links */}
        <Box flex="1" minWidth="200px" mb={2}>
          <Typography variant="h6">Quick Links</Typography>
          <Typography
            component="a"
            href="/"
            sx={{
              display: 'block',
              fontSize: '0.9em',
              textDecoration: 'none',
              color: theme.palette.text.primary,
              marginBottom: '8px',
              ':hover': { color: theme.palette.primary.main, textDecoration: 'underline' },
            }}
          >
            Home
          </Typography>
          <Typography
            component="a"
            href="/about"
            sx={{
              display: 'block',
              fontSize: '0.9em',
              textDecoration: 'none',
              color: theme.palette.text.primary,
              marginBottom: '8px',
              ':hover': { color: theme.palette.primary.main, textDecoration: 'underline' },
            }}
          >
            About Us
          </Typography>
          {/* Add more links as needed */}
        </Box>

        {/* Operating Hours */}
        <Box flex="1" minWidth="200px" mb={2}>
          <Typography variant="h6">Operating Hours</Typography>
          <Typography fontSize="0.9em">Monday - Friday: 8:00 AM - 6:00 PM</Typography>
          <Typography fontSize="0.9em">Saturday: 9:00 AM - 1:00 PM</Typography>
          <Typography fontSize="0.9em">Sunday: Closed</Typography>
        </Box>

        {/* Contact Information */}
        <Box flex="1" minWidth="200px" mb={2}>
          <Typography variant="h6">Contact Information</Typography>
          <Typography fontSize="0.9em">SACCO HQ, Nairobi, Kenya</Typography>
          <Typography fontSize="0.9em">Phone: +254 700 123456</Typography>
          <Typography fontSize="0.9em">Email: info@sacco.co.ke</Typography>
        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.8em',
          marginTop: '20px',
          borderTop: `1px solid ${theme.palette.text.primary}`, // Use theme's text color for the border
          paddingTop: '10px',
        }}
      >
        © {new Date().getFullYear()} Designed and Developed by 816 Dynamics
      </Typography>
    </footer>
  );
};

export default Footer;
