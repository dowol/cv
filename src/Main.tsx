import Intro from "./Intro.tsx";
import About from "./About.tsx";
import Timeline from "./Timeline.tsx";
import styled from "@emotion/styled";
import Skills from "./Skills.tsx";

const Contents = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    & > section {
        padding: 0 1rem;
        min-height: calc(100vh - 4rem);
    }
`;

export default function Main() {
    return (
        <Contents>
            <Intro/>
            <About/>
            <Timeline/>
            <Skills/>
        </Contents>
    )
}