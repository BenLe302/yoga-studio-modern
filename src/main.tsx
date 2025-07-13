import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'

// Set page title and favicon
document.title = 'Dac Yoga';
const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
if (favicon) {
  favicon.href = '/favicon.ico';
} else {
  const newFavicon = document.createElement('link');
  newFavicon.rel = 'icon';
  newFavicon.type = 'image/x-icon';
  newFavicon.href = '/favicon.ico';
  document.head.appendChild(newFavicon);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)