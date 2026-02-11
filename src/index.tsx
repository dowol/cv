import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {detectLanguage} from "./util/lang.ts";

import dayjs from 'dayjs';
import UpdateLocale from 'dayjs/plugin/updateLocale';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ko';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import 'dayjs/locale/ja';

dayjs.extend(UpdateLocale);
dayjs.extend(LocalizedFormat);

dayjs.updateLocale('en', {
    formats: {
        LL: 'DD MMMM YYYY'
    }
})

// if (!import.meta.env.DEV)
   // window.addEventListener('load', detectLanguage);
detectLanguage();

createRoot(document.querySelector('cv-root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
);
