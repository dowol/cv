import styled from '@emotion/styled';
import MarkdownContent from "./Markdown.tsx";
import {useAsset} from "./util/assets";
import useMessage from "./util/message.ts";
import GreetingMessage from "./GreetingMessage.tsx";

const Section = styled.section`
    font-family: 'Wanted Sans', 'Noto Sans KR', sans-serif;
    min-height: calc(100vh - 4rem);
    height: fit-content;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    gap: 1rem;
    padding: 0 1rem;

    @media (min-width: 720px) {
        flex-flow: row nowrap;
        justify-content: space-evenly;
    }
`;

const Profile = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .25rem;
    
    
    @media(min-width: 480px) {
        margin-top: 2rem;
    }
    
    @media(min-width: 720px) {
        margin-top: 0;
    }
`;

const ProfileImage = styled.img`
    max-height: 256px;
    height: 50vw;
    min-height: 128px;
    border-radius: 256px;
    background-color: rgba(64, 64, 64, 12.5%);
`;

const Greetings = styled.article`
    display: flex;
    flex-flow: column nowrap;
    max-width: 640px;

    .markdown-content {
        font-size: 1rem;
        text-align: center;

        @media (min-width: 480px) {
            font-size: 1.25rem;
        }

        @media (min-width: 720px) {
            text-align: left;
            margin-right: .5rem;
        }

        @media (min-width: 960px) {
            font-size: 1.5rem;
        }

        * {
            font-weight: 200;
        }
    }
`;

export default function Intro() {
    const introduction = useAsset('intro-greetings.md', 'text');

    return (
        <Section id={'intro'}>
            <Profile>
                <ProfileImage src={'https://avatars.githubusercontent.com/u/79355575'}/>
            </Profile>
            <Greetings>
                <GreetingMessage/>
                <MarkdownContent>{introduction}</MarkdownContent>
                <QuickActions/>
            </Greetings>
        </Section>
    )
}

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .5rem 1.5rem;
    align-self: stretch ;

    @media (min-width: 480px) {
        flex-direction: row;
        padding: 0;
    }

`;

const ActionItem = styled.a`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;
    color: inherit;
    
    transition: color .375s ease-in-out;

    &:hover {
        color: var(--color-indigo);
    }

    padding: .5rem;

    border-bottom: 1px solid gray;
    
    & .bi {
        font-size: 2em;
    }

    &[href=""], &:not([href]) {
        display: none;
        // color: gray;
        // text-decoration-line: line-through;
    }
    
    @media (min-width: 480px) {
        flex-direction: column;
        justify-content: center;

        width: 6rem;
        height: 5rem;
        gap: 0;
        padding: 0;

        border: none;
    }
    
    & span {
        width: 100%;
    }


    & .iconify {
        font-size: 2.5rem;

        @media (min-width: 480px) {
            flex-grow: 1;
        }
    }
`;

const QuickAccess = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;

    h6 {
        margin: 0 1.5rem;
        font-size: 1rem;
        text-align: center;
        background-color: rgba(128, 128, 128, .25);
        padding: .125rem .5rem;
        border-radius: .375rem;
        text-transform: uppercase;
    }
    
    @media(min-width: 480px) {
        gap: .5rem;
    }
`;

const ActionLabel = styled.span`
    text-align: center;
`;

function QuickActions() {
    const message = useMessage();

    return (
        <QuickAccess>
            <h6 translate={'no'} className={'notranslate'}>Quick Access</h6>
            <Nav>
                <ActionItem href={'#about'}>
                    <i className={'bi bi-person-circle'}></i>
                    <ActionLabel>{message?.profile}</ActionLabel>
                </ActionItem>
                <ActionItem href={'https://github.com/dowol'}>
                    <i className={'bi bi-github'}></i>
                    <ActionLabel>{message?.github}</ActionLabel>
                </ActionItem>
                <ActionItem href={'mailto:dowol.dev@gmail.com'}>
                    <i className={'bi bi-envelope-at'}></i>
                    <ActionLabel>{message?.email}</ActionLabel>
                </ActionItem>
                <ActionItem href={undefined/*getAssetURL('cv.pdf')*/}>
                    <i className={'bi bi-file-earmark-pdf'}></i>
                    <ActionLabel>{message?.pdf}</ActionLabel>
                </ActionItem>
            </Nav>
        </QuickAccess>
    );
}