import dayjs from 'dayjs';
import type {PropsWithChildren} from 'react';

interface TimeProps extends PropsWithChildren {
    dateTime: string | dayjs.Dayjs | Date;
    format?: string;
}

export default function Time({dateTime, children, format}: TimeProps){
    return (
        <time dateTime={dateTime.toString()}>
            {children || dayjs(dateTime, undefined).format(format)}
        </time>
    )
}