import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const HamburgerMenu = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <List>
        {['Dashboard', 'Members', 'Loans', 'Reports', 'Settings'].map((text) => (
          <ListItem button key={text} onClick={toggleDrawer(false)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default HamburgerMenu;
