import styled from "@emotion/styled";
import {SectionTitle} from "./Components.tsx";
import DayjsTime from "./DayjsTime.tsx";
import {useModifier} from "./util/grammatics.tsx";
import {useAsset} from "./util/assets.ts";
import MarkdownContent from "./Markdown.tsx";
import useMessage from "./util/message.ts";

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
            
            @media(min-width: 720px) {
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

const WorkHistory = styled.section`

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
    beginModifier: string;
    endModifier?: string;
    currentModifier?: string;
}

function Period(props: PeriodProps) {
    const modifier = useModifier();

    return (
        <PeriodPara>
            <span>{modifier(<DayjsTime dateTime={props.begin} format={'ll'}/>, props.beginModifier)}</span>
            <PeriodArrow>&nbsp;&rarr;&nbsp;</PeriodArrow>
            <span>
                {
                    props.end && props.endModifier ?
                    modifier(<DayjsTime dateTime={props.end} format={'ll'}/>, props.endModifier)
                        : props.currentModifier
                }
            </span>
        </PeriodPara>
    )
}

interface TimelineInfo {
    category: 'education' | 'work';
    title: string;
    subtitle?: string;
    logo?: string;
    url?: string;
    period: {
        begin: string;
        end: string;
    };
    description?: string;
}

export default function Timeline() {

    const timeline = useAsset('timeline.json', 'json') as TimelineInfo[];
    const message = useMessage();


    return (
        <Section id={'timeline'}>
            <SectionTitle>저는 이렇게 살아왔어요</SectionTitle>
            <TimelineArticle>
                <EducationHistory>
                    <h3>🎓 학력</h3>
                    {
                        timeline?.filter(i => i.category === 'education').map(i => (
                            <article key={i.title}>
                                <h4>
                                    <img src={i.logo}/>
                                    <div>
                                        <a href={i.url}>{i.title}&nbsp;</a>
                                    </div>
                                </h4>
                                <small>{i.subtitle}</small>
                                <Period begin={i.period.begin} end={i.period.end} currentModifier={message?.current_edu}
                                        beginModifier={message?.begin_edu} endModifier={message?.end_edu}/>
                                {i.description && (<MarkdownContent>{i.description}</MarkdownContent>)}
                            </article>
                        ))
                    }
                </EducationHistory>
                <WorkHistory>
                    <h3>🛠️ 경력</h3>
                    {
                        timeline?.filter(i => i.category === 'work').map(i => (
                            <article key={i.title}>
                                <h4>
                                    <img src={i.logo}/>
                                    <div>
                                        <a href={i.url}>{i.title}&nbsp;</a>
                                        <small>{i.subtitle}</small>
                                    </div>
                                </h4>
                                <Period begin={i.period.begin} end={i.period.end} currentModifier={message?.current_work}
                                        beginModifier={message?.begin_work} endModifier={message?.end_work}/>
                                {i.description && (<MarkdownContent>{i.description}</MarkdownContent>)}
                            </article>
                        ))
                    }
                </WorkHistory>
            </TimelineArticle>
        </Section>
    )
}

