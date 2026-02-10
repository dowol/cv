import dayjs from 'dayjs';
import type {PropsWithChildren} from "react";

interface DayjsTimeProps extends PropsWithChildren{
    dateTime: string | dayjs.Dayjs | Date;
    format?: string;
}

export default function DayjsTime({dateTime, children, format}: DayjsTimeProps){
    return (
        <time dateTime={dateTime.toString()}>
            {children ?? dayjs(dateTime).format(format)}
        </time>
    )
}