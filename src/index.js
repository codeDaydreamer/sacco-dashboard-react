import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProviderWrapper from './ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom'; // Wrap with Router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </Router>
  </React.StrictMode>
);
