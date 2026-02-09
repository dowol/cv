import Intro from "./Intro.tsx";
import Whoami from "./Whoami.tsx";
import Timeline from "./Timeline.tsx";
import styled from "@emotion/styled";

const Contents = styled.main`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    
    & > section {
        padding: 0 1rem;
        min-height: calc(100vh - 4rem);
    }
    
`;

export default function Main() {
    return (
        <Contents>
            <Intro/>
            <Whoami/>
            <Timeline/>
        </Contents>
    )
}