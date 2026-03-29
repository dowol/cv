import styled from '@emotion/styled';
import Time from '../components/Time.tsx';
import {Trans} from '@lingui/react/macro';
import ReactMarkdown from 'react-markdown';
import type {TimelineInfo} from '../data.ts';
import SectionTitle from '../components/SectionTitle.tsx';
import {useQuery} from '@tanstack/react-query';
import {local} from '../util/assets.ts';
import QueryError from '../components/QueryError.tsx';

const Section = styled.section`

`;

const TimelineArticle = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    column-gap: 1rem;
    margin: 0 auto;
    max-width: 600px;

    @media (min-width: 960px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: min(calc(100vw - 2rem), 1280px);
    }

    & > section {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        & > article {
            padding: 1rem;
            border-radius: .625rem;
            background-color: rgba(255, 255, 255, .125);

            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        h3, h4, h5, h6 {
            margin: 0;

            font-weight: 400;

        }

        h3 {
            text-align: center;
            font-weight: 500;
            margin-bottom: .75rem;
        }

        h4 {
            display: flex;
            align-items: stretch;
            gap: .75rem;
            font-size: 1.5rem;

            @media (min-width: 720px) {
                font-size: 1.75rem;
            }


            & > div {
                display: flex;
                flex-flow: column nowrap;
                align-items: stretch;

                flex-grow: 1;

                & a {
                    color: inherit;

                    &:hover {
                        text-decoration: 1px solid underline;
                    }
                }

            }
        }

        h4 > img {
            height: 1.5em;
            vertical-align: middle;

        }

        small {
            display: block;
            color: #bbb;
            font-size: 1rem;

            @media (min-width: 720px) {
                font-size: 1.25rem;
            }

            &:before {
                content: '-';
                margin-inline-end: .5em;
            }
        }
    }

`;

const EducationHistory = styled.section`

`;

const CareerHistory = styled.section`

`;

const PeriodPara = styled.p`
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    column-gap: .375em;

    @media (min-width: 540px) {
        display: block;
        text-align: right;
    }
`;

const PeriodArrow = styled.span`
    display: none;
    @media (min-width: 540px) {
        display: initial;
    }
`;

interface PeriodProps {
    begin: string;
    end?: string;
}

function EducationPeriod({begin, end}: PeriodProps) {
    return (
        <PeriodPara>
            <Trans>Entered <Time dateTime={begin} format={'ll'}/></Trans>
            <PeriodArrow>&nbsp;&rarr;&nbsp;</PeriodArrow>
            {end ? <Trans>Graduated <Time dateTime={end} format={'ll'}/></Trans> : <Trans>Current</Trans>}
        </PeriodPara>
    )
}


function CareerPeriod({begin, end}: PeriodProps) {
    return (
        <PeriodPara>
            <Trans>Joined <Time dateTime={begin} format={'ll'}/></Trans>
            <PeriodArrow>&nbsp;&rarr;&nbsp;</PeriodArrow>
            {end ? <Trans>Resigned <Time dateTime={end} format={'ll'}/></Trans> : <Trans>Current</Trans>}
        </PeriodPara>
    )
}


export default function Timeline() {
    return (
        <Section id={'timeline'}>
            <SectionTitle>
                <Trans>I've grown up with these</Trans>
            </SectionTitle>
            <TimelineDetails/>
        </Section>
    )
}

function TimelineDetails() {
    const {data, isPending, error} = useQuery<TimelineInfo[]>({
        queryKey: ['timeline'],
        queryFn: () => local('timeline.json', 'json'),
    });

    if (error) return (<QueryError {...{error}}/>);
    else if (isPending) return (<></>);
    else return (
            <TimelineArticle>
                <EducationHistory>
                    <h3>🎓 <Trans>Education</Trans></h3>
                    {
                        data?.filter(i => i.category === 'education').map(i => (
                            <article key={i.title}>
                                <h4>
                                    <img src={i.logo}/>
                                    <div>
                                        <a href={i.url}>{i.title}&nbsp;</a>
                                    </div>
                                </h4>
                                <small>{i.subtitle}</small>
                                <EducationPeriod begin={i.period.begin} end={i.period.end}/>
                                {i.description && (<ReactMarkdown>{i.description}</ReactMarkdown>)}
                            </article>
                        ))
                    }
                </EducationHistory>
                <CareerHistory>
                    <h3>🛠️ <Trans>Career</Trans></h3>
                    {
                        data?.filter(i => i.category === 'work').map(i => (
                            <article key={i.title}>
                                <h4>
                                    <img src={i.logo}/>
                                    <div>
                                        <a href={i.url}>{i.title}&nbsp;</a>
                                        <small>{i.subtitle}</small>
                                    </div>
                                </h4>
                                <CareerPeriod begin={i.period.begin} end={i.period.end}/>
                                {i.description && (<ReactMarkdown>{i.description}</ReactMarkdown>)}
                            </article>
                        ))
                    }
                </CareerHistory>
            </TimelineArticle>
        )
}