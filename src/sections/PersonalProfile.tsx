import styled from '@emotion/styled';
import {useQuery} from '@tanstack/react-query';
import {local} from '../util/assets';
import QueryError from '../components/QueryError.tsx';
import type {PropsWithChildren} from 'react';
import Time from '../components/Time.tsx';
import {shorten} from '../util/url.ts';
import {Trans} from '@lingui/react/macro';

const Section = styled.section`
    padding: 1rem .75rem;
    border-radius: .625rem;
    background-color: rgba(128, 128, 128, 25%);
    

    @media (min-width: 640px) {
        align-self: center;
        padding: 1rem 2rem;
    }

    > ul {
        list-style: none;
        padding-left: 0;
        margin: 0;

        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        gap: .5rem;

        > li {
            display: flex;
            flex-flow: column wrap;
            gap: .25rem;
        }

        @media (min-width: 480px) {
            > li {
                flex-direction: row;
                gap: .5rem;
            }
        }
    }
`;


export default function PersonalProfile() {
    const {data, isPending, error} = useQuery({
        queryKey: ['profile'],
        queryFn: () => local('profile.json', 'json')
    });

    if (error) return (<QueryError {...{error}}/>);
    else if(isPending) return <></>;
    else return (
        <Section id={'profile'}>
            <ul>
                <li>
                    <Key icon={'person'}><Trans>Name</Trans></Key>
                    <Value {...{isPending}}>{data.name}</Value>
                </li>
                <li>
                    <Key icon={'cake'}><Trans>Birthday</Trans></Key>
                    <Value {...{isPending}}><Time dateTime={data.birthday} format={'LL'}/></Value>
                </li>
                <li>
                    <Key icon={'github'}><Trans>GitHub</Trans></Key>
                    <Value {...{isPending}}><a href={data.github}>{shorten(data.github)}</a></Value>
                </li>
                <li>
                    <Key icon={'envelope-at'}><Trans>E-mail</Trans></Key>
                    <Value {...{isPending}}><a href={data.email}>{shorten(data.email)}</a></Value>
                </li>
            </ul>
        </Section>
    );
}

interface KeyProps extends Required<PropsWithChildren>{
    icon: string;
}

const PropertyKey = styled.span`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: .25rem;
    width: 25vw;
    min-width: 100px;

    @media (min-width: 720px) {
        width: auto;
    }
`;

function Key({icon, children}: KeyProps) {
    return (<PropertyKey><i className={'bi bi-' + icon}/>&nbsp;{children}</PropertyKey>);
}

interface ValueProps extends Required<PropsWithChildren> {
    isPending: boolean;
}

const PropertyValue = styled.section`
    font-weight: 600;
    margin-left: calc(.5rem - 1px);
    border-left: 1px solid gray;
    padding-left: 1rem;

    @media (min-width: 480px) {
        margin-left: 0;
    }

    @media (min-width: 720px) {
        font-size: 1.125em;
    }

    & a {
        color: inherit;

        &:hover {
            text-decoration: underline;
        }
    }

    :lang(ja){
        font-weight: 200;
    }
`;

function Value({children, isPending}: ValueProps) {
    return <PropertyValue>{isPending || children}</PropertyValue>
}