import { Buffer } from 'buffer';

// Polyfill Buffer globally
window.Buffer = window.Buffer || Buffer;

import VechainProvider from './services/VechainProvider.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VechainProvider>
    <App />
    </VechainProvider>
  </StrictMode>,
)
