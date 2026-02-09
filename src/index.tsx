import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {detectLanguage} from "./util/lang.ts";

if (!import.meta.env.DEV)
    window.addEventListener('load', detectLanguage);

createRoot(document.querySelector('cv-root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
