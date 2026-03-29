import styled from '@emotion/styled';
import {Trans} from '@lingui/react/macro';
import PersonalProfile from './PersonalProfile.tsx';

const Heading = styled.h1`
    margin: 0;
    
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.25;

    text-transform: uppercase;

    @media (min-width: 480px) {
        font-size: 3rem;
    }

    @media (min-width: 720px) {
        text-align: right;
        margin-right: 1rem;
    }

    @media (min-width: 840px) {
        font-size: 4rem;
    }
    
    @media(min-width: 960px) {
        margin-right: 1.5rem;
    }

    animation: fade-in .75s ease-out forwards;

    strong {
        color: var(--color-indigo);
        font-weight: 700;
    }
`;

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

    @media (min-width: 480px) {
        margin-top: 2rem;
    }

    @media (min-width: 720px) {
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

    p {
        font-size: 1rem;
        text-align: left;

        @media (min-width: 480px) {
            font-size: 1.25rem;
        }

        @media (min-width: 720px) {
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

    return (
        <Section id={'intro'}>
            <Profile>
                <ProfileImage src={'https://avatars.githubusercontent.com/u/79355575'} loading={'eager'} />
            </Profile>
            <Greetings>
                <Heading>
                    <Trans>
                        Hello<br/> I am <strong>Dowol</strong><br/> the Developer
                    </Trans>
                </Heading>

                <p>
                    <Trans>
                        I am focusing on Web Full-stack and Windows App development.
                        I wish to be a developer who learn & apply diverse programming knowledge and skills
                        in real situations, thereby enhancing productivity and user experiences.
                    </Trans>
                </p>
                <PersonalProfile/>
            </Greetings>
        </Section>
    )
}