import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Add custom cursor styles
const style = document.createElement('style');
style.textContent = `
  * {
    cursor: none !important;
  }
  
  @media (max-width: 768px) {
    * {
      cursor: auto !important;
    }
  }
`;
document.head.appendChild(style);

// Add Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
