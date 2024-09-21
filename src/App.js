import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemeProviderWrapper from './ThemeContext'; // Import your ThemeProviderWrapper
import Dashboard from './pages/Dashboard';
import MembersPage from './pages/MembersPage';
import TransactionsPage from './pages/TransactionsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import Sidebar from "./components/SideBar/Sidebar"; // Ensure the casing matches the folder name
import { Box } from '@mui/material'; // Import Box for layout
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <ThemeProviderWrapper>
    <SpeedInsights />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Sidebar open={true} toggleDrawer={() => {}} /> {/* Sidebar is always open for simplicity */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: '20px',
            marginLeft: '10px', // Adjust this value to match the width of your sidebar
            transition: 'margin-left 0.3s',
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Box>
      
      </Box>
    </ThemeProviderWrapper>
  );
};

export default App;
