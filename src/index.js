import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const theme = createTheme ({
  breakpoints: {
    'xs': '320px',
    'sm': '476px',
    'md': '640px',
    'bs': '768px',
    'lg': '900px',
    'xl': '1024',
    '2xl': '1280',
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <App />
      </MantineProvider>
    </React.StrictMode>
  </Router>
);

reportWebVitals();