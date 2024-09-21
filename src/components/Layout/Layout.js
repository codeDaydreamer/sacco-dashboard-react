// src/components/Layout/Layout.js

import React from "react";
import { AppBar, Toolbar, Typography, Box, CssBaseline, IconButton, FormControlLabel, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "../../ThemeContext"; // Adjust path
import Sidebar from "../SideBar/Sidebar"; // Adjust path
import SearchBar from "../SearchBar/SearchBar"; // Adjust path
import UserProfile from "../UserProfile/UserProfile"; // Adjust path
import Notifications from "../Notifications/Notifications"; // Adjust path

const Layout = ({ children }) => {
  const { toggleTheme, theme } = useTheme();
  const { palette } = theme;
  const darkMode = palette.mode === "dark";
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box className="layout" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />

      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          backgroundColor: darkMode ? "#002244" : palette.primary.main, // Change to corresponding dark blue
          color: palette.common.white,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap sx={{ flexGrow: 1, fontWeight: "bold" }}>
            SACCO Staff Dashboard
          </Typography>
          <SearchBar sx={{ marginRight: 5 }} />
          <UserProfile sx={{ marginRight: 5 }} />
          <Notifications sx={{ marginRight: 5, marginLeft: 5 }} />
          <FormControlLabel
            control={<Switch onChange={toggleTheme} />}
            label={darkMode ? "Light Mode" : "Dark Mode"}
            sx={{ marginLeft: 2 }}
          />
        </Toolbar>
      </AppBar>

      <Sidebar open={true} toggleDrawer={toggleDrawer} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: "20px",
          marginLeft: { xs: drawerOpen ? "0" : "0", md: "250px" }, // Adjust padding for Sidebar
          transition: "margin-left 0.3s",
          backgroundColor: palette.background.default,
          color: palette.text.primary,
        }}
      >
        <Toolbar />
        {children}
      </Box>

     
    </Box>
  );
};

export default Layout;
