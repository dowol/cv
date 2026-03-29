import styled from '@emotion/styled';
import Essay from './Essay.tsx';
import SectionTitle from '../components/SectionTitle.tsx';
import {Trans} from '@lingui/react/macro';

const Section = styled.section`
    display: flex;
    flex-direction: column;
`;

export default function About(){
    return (
        <Section id={'about'}>
            <SectionTitle>
                <Trans>I am a junior developer</Trans>
            </SectionTitle>
            <Essay/>
        </Section>
    )
}