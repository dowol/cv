import dayjs from 'dayjs';
import UpdateLocale from 'dayjs/plugin/updateLocale';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import RelativeTime from 'dayjs/plugin/relativeTime';
import {getLanguage} from '../util/lang.ts';

import 'dayjs/locale/en';
import 'dayjs/locale/ko';
import 'dayjs/locale/ja';
import 'dayjs/locale/fr';

dayjs.extend(UpdateLocale);
dayjs.extend(LocalizedFormat);
dayjs.extend(RelativeTime);

dayjs.updateLocale('en', {
    formats: {
        L: 'DD/MM/YYYY',
        LL: 'DD MMMM YYYY',
        LLL: 'D MMMM YYYY, h:mm A',
        LLLL: 'dddd, D MMMM YYYY, h:mm A'
    }
});

dayjs.locale(getLanguage());