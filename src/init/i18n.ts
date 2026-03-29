import {getLanguage} from '../util/lang';
import {i18n} from '@lingui/core';

import {messages as en} from '../locales/en';
import {messages as fr} from '../locales/fr';
import {messages as ja} from '../locales/ja';
import {messages as ko} from '../locales/ko';

const lang = getLanguage();

i18n.load({en, fr, ja, ko});
i18n.activate(lang);

export default i18n;