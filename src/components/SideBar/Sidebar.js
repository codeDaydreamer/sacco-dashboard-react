import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faMoneyBillWave, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ open }) => {
  const theme = useTheme();

  return (
    <Box
      className="sidebar"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: '100vh',
        width: '250px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1200,
        transition: 'transform 0.3s ease',
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '20px', marginTop: '30px' }}>
        Menu
      </Typography>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li className="sidebar-item">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/members" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FontAwesomeIcon icon={faUsers} /> <span>Members</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/transactions" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FontAwesomeIcon icon={faMoneyBillWave} /> <span>Transactions</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/reports" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FontAwesomeIcon icon={faChartLine} /> <span>Reports</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default Sidebar;
