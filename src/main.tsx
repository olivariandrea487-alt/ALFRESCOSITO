import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const removeBoltBadge = () => {
  const selectors = [
    'script[src*="bolt.new"]',
    'iframe[src*="bolt.new"]',
    '[id*="bolt"]',
    '[class*="bolt"]',
    'div[style*="z-index: 2147483647"]'
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });
};

removeBoltBadge();
const observer = new MutationObserver(() => removeBoltBadge());
observer.observe(document.documentElement, { childList: true, subtree: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
