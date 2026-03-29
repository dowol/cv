import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import './init/i18n.ts';
import './init/dayjs.ts';


createRoot(document.querySelector('.cv-root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
