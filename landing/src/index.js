import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { 
  HashRouter, 
  Routes, 
  Route,
} from "react-router-dom";

import ReactGA from "react-ga4";

ReactGA.initialize("G-FH259BJDWK");

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5"
    },
    primary: {
      main: "#cf954f"
    },
    info: {
      main: "#bdbdbd"
    },
    text: {
      primary: "rgba(0,0,0,0.7)",
    }
  },
  typography: {
    fontFamily: '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif',
    body2: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    h2: {
      fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
      textTransform: "uppercase",
      letterSpacing: "0.5em",
      marginRight: "-0.5em",
    },
    h4: {
      fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: "0.3em",
      marginRight: "-0.3em",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/zh" element={<App chinese={true} />} />
        </Routes>
      </HashRouter>

    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
