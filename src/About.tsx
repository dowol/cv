import styled from '@emotion/styled';
import {SectionTitle} from "./Components.tsx";
import MarkdownContent from "./Markdown.tsx";
import {useAsset} from "./util/assets-legacy.ts";
import DayjsTime from "./DayjsTime.tsx";
import useMessage from "./util/message.ts";


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
        text-align: left;
        width: min(600px, calc(100vw - 4rem));
    }
    
    @media(min-width: 480px) {
        & p {
            font-size: 1.125rem;
        }
    }
    
    @media(min-width: 1200px) {
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        
        > * {
            flex-basis: 30vw;
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


export default function About() {
    const essay = useAsset('whoami-article.md', 'text');
    const message = useMessage();

    return (
        <Section id={'about'}>
            <SectionTitle>{message?.title_about}</SectionTitle>
            <PersonalProfile/>
            <Essay>
                {essay?.split(/-{3,}\r?\n/g)?.map(((article, index) => (<MarkdownContent key={index}>{article}</MarkdownContent>)))}
            </Essay>
        </Section>
    )
}


const Profile = styled.article`
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


        @media (min-width: 960px) {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;

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

function PersonalProfile() {
    const message = useMessage();
    const profile = useAsset('profile.json', 'json');

    return (
        <Profile id={'profile'}>
            <ul>
                <li>
                    <PropertyKey><i className={'bi bi-person-circle'}></i>&nbsp;{message?.name ?? 'Name'}</PropertyKey>
                    <PropertyValue>{profile?.name}</PropertyValue>
                </li>
                <li>
                    <PropertyKey><i className={'bi bi-cake'}></i>&nbsp;{message?.birthday ?? 'Name'}</PropertyKey>
                    <PropertyValue>{profile && <DayjsTime dateTime={profile?.birthday} format={'LL'}/>}</PropertyValue>
                </li>
                <li>
                    <PropertyKey><i className={'bi bi-github'}></i>&nbsp;{message?.github ?? 'Name'}</PropertyKey>
                    <PropertyValue><a href={profile?.github}>{profile && getShortenedURL(profile.github)}</a></PropertyValue>
                </li>
                <li>
                    <PropertyKey><i className={'bi bi-envelope-at'}></i>&nbsp;{message?.email ?? 'Name'}</PropertyKey>
                    <PropertyValue><a href={profile?.email}>{profile && getShortenedURL(profile.email)}</a></PropertyValue>
                </li>
            </ul>
        </Profile>

    );
}

function getShortenedURL(href: string): string {
    try {
        const url = new URL(href);
        return url.host + url.pathname + url.search;
    }
    catch(e) {
        return '';
    }
}