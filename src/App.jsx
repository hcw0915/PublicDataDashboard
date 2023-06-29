import React from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Navbar, Aside } from './layout/index';
import Dashboard from './components/Dashboard';
import './App.css';

const theme = createTheme({
  // 定義您的自訂主題屬性
  palette: {
    primary: {
      main: '#C29FFF',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Navbar />
        <Box display={'flex'} mt={1}>
          <Aside />
          <Dashboard />
        </Box>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
