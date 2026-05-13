import styled from '@emotion/styled';
import Intro from '../sections/Intro.tsx';
import About from '../sections/About.tsx';
import Timeline from '../sections/Timeline.tsx';


const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    & > section {
        padding: 0 1rem;
        min-height: calc(100vh - 4rem);
    }
`;

export default function Main(){
    return (
        <Container>
            <Intro/>
            <About/>
            <Timeline/>
        </Container>
    )
}