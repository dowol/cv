import styled from '@emotion/styled';
import {SectionTitle} from "./Components.tsx";
import {Icon} from '@iconify/react';
import {useEffect, useState} from "react";
import MarkdownContent from "./Markdown.tsx";
import {getAsset} from "./util/assets.ts";


const Section = styled.section`
    display: flex;
    flex-direction: column;
`;

const Essay = styled.article`
    margin: 1.5rem .5rem;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    
    column-gap: .5rem;
    row-gap: 1.5rem;
    
    > * {
        text-align: center;
        width: min(600px, calc(100vw - 4rem));
    }
    
    @media(min-width: 480px) {
        & p {
            font-size: 1.125rem;
        }
    }
    
    @media(min-width: 960px) {
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        
        > * {
            flex-basis: 30vw;
            text-align: justify;
        }
    }
    
    
    h3, h4, h5, h6 {
        margin: 0;
        font-weight: 500;
        text-align: center;
    }
    
    h3 {
        font-size: 1.5rem;
        
    }
    
    h4 {
        font-size: 1.25rem;
    }
`;


export default function Whoami() {
    let [essay, setEssay] = useState<string[]>([]);


    useEffect(() => {
        getAsset('whoami-article.md')
            .then(res => res.text())
            .then(text => {
                const articles = text.split(/-{3,}\r?\n/g);
                setEssay(articles);
                console.log(articles);
            });
    }, []);

    return (
        <Section id={'about'}>
            <SectionTitle>저는 이런 개발자에요</SectionTitle>
            <PersonalProfile/>
            <Essay>
                {essay.map(((article, index) => (<MarkdownContent key={index}>{article}</MarkdownContent>)))}
            </Essay>
        </Section>
    )
}


const Profile = styled.article`
    padding: 1rem .75rem;
    border-radius: .625rem;
    background-color: rgba(128, 128, 128, 25%);

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


        @media (min-width: 720px) {
            flex-direction: row;
            justify-content: space-evenly;

            > li {
                flex-direction: column;
                gap: .25rem;
            }
        }

    }
`;

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
        gap: 0;
    }

    & .iconify {
        width: 24px;
    }
`;

const PropertyValue = styled.span`
    font-weight: 600;
    margin-left: calc(.75rem - 1px);
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
`;


const profile = [
      {
        icon: 'bi:person-circle',
        name: '이름',
        value: '조석현'
    },{
        icon: 'mdi:birthday-cake-outline',
        name: '생년월일',
        value: <time dateTime={'2001-12-12'}>2001년&nbsp;12월&nbsp;12일</time>
    },{
        icon: 'mdi:github',
        name: 'GitHub',
        value: <a href={'https://github.com/dowol'}>github.com/dowol</a>
    },{
        icon: 'mdi:alternate-email',
        name: '이메일',
        value: <a href={'mailto:dowol.dev@gmail.com'}>dowol.dev@gmail.com</a>
    }
]

function PersonalProfile() {
    return (
        <Profile id={'profile'}>
            <ul>
                {
                    profile.map(({icon, name, value}) => (
                        <li key={icon}>
                            <PropertyKey><Icon {...{icon}}/>&nbsp;{name}</PropertyKey>
                            <PropertyValue>{value}</PropertyValue>
                        </li>
                    ))
                }
            </ul>
        </Profile>

    );
}