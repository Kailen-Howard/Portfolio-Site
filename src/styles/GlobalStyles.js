import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: #0a0a0a;
    --color-text: #e0e0e0;
    --color-primary: #00ff9d;
    --color-secondary: #6b3dd4;
    --color-accent: #ff00ff;
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: var(--font-sans);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-secondary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  /* Terminal-like text selection */
  ::selection {
    background: var(--color-primary);
    color: var(--color-background);
  }

  /* Base styles for headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-mono);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  /* Glitch effect classes */
  .glitch {
    position: relative;
    
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -2px 0 var(--color-primary);
      animation: glitch-1 2s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 2px 0 var(--color-accent);
      animation: glitch-2 3s infinite linear alternate-reverse;
    }
  }

  @keyframes glitch-1 {
    0% {
      clip-path: inset(20% 0 30% 0);
    }
    20% {
      clip-path: inset(65% 0 1% 0);
    }
    40% {
      clip-path: inset(43% 0 1% 0);
    }
    60% {
      clip-path: inset(25% 0 58% 0);
    }
    80% {
      clip-path: inset(75% 0 5% 0);
    }
    100% {
      clip-path: inset(10% 0 85% 0);
    }
  }

  @keyframes glitch-2 {
    0% {
      clip-path: inset(25% 0 58% 0);
    }
    20% {
      clip-path: inset(75% 0 5% 0);
    }
    40% {
      clip-path: inset(10% 0 85% 0);
    }
    60% {
      clip-path: inset(20% 0 30% 0);
    }
    80% {
      clip-path: inset(65% 0 1% 0);
    }
    100% {
      clip-path: inset(43% 0 1% 0);
    }
  }
`;

export default GlobalStyles;
