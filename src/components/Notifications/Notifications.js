import React from 'react';
import { IconButton, Badge, Menu, MenuItem } from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';

const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const notifications = ["New Member Joined", "Loan Approved", "Payment Due"];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={notifications.length} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {notifications.map((notification, index) => (
          <MenuItem key={index}>{notification}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Notifications;
