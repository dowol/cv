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
});