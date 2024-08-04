import { createTheme } from '@mui/material/styles';

// Define your custom colors
const theme = createTheme({
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      color: '#333',
    },
  },
  palette: {
    background: {
      default: '#efefef',
    },
    primary: {
      main: '#1b1b1b',
    },
    secondary: {
      main: '#64275b',
    },
  },
});

export default theme;
