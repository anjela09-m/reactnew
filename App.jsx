import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashBoard from './components/DashBoard';
import BlogForm from './components/BlogForm';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 🎨 Customize theme here
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC0CB', 
    },
    secondary: {
      main: '#808000', 
    },
    background: {
      default: '#f5f5f5', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/d" element={<DashBoard />} />
        <Route path="/b" element={<BlogForm />} />
        <Route path="/n" element={<Navbar />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
