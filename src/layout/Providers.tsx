import type {PropsWithChildren} from 'react';
import {I18nProvider} from '@lingui/react';
import i18n from '../init/i18n.ts';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '../util/query.ts';

export default function Providers({children}: PropsWithChildren) {
    return (
        <I18nProvider {...{i18n}}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </I18nProvider>
    );
}
