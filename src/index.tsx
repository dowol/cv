import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {detectLanguage} from "./util/lang.ts";

import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ko';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import 'dayjs/locale/ja';

dayjs.extend(LocalizedFormat);

// if (!import.meta.env.DEV)
   // window.addEventListener('load', detectLanguage);
detectLanguage();


window.addEventListener('hashchange', e => {
    const url = new URL(e.newURL);
    document.title = '//' + (import.meta.env.DEV ? 'cv.dowol.dev' : url.hostname) + '/' + url.hash;
});

createRoot(document.querySelector('cv-root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
);
