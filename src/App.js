import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import styled from 'styled-components';
import Home from './components/Home';
import CreateGroup from './components/CreateGroup';
import JoinGroup from './components/JoinGroup';
import Wishlist from './components/Wishlist';
import AdditionalFeatures from './components/additional-features';  
import Footer from './components/footer';
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#e63946', // Festive red
    },
    secondary: {
      main: '#2a9d8f', // Pine green
    },
    background: {
      default: '#f1faee',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #f1faee 0%, #a8dadc 100%);
  overflow: hidden;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="1" fill="white" opacity="0.3"/></svg>');
    pointer-events: none;
    animation: snow 20s linear infinite;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-group" element={<CreateGroup />} />
            <Route path="/join-group" element={<JoinGroup />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
