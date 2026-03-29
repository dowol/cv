import styled from '@emotion/styled';
import {version} from '../../package.json' with {type: 'json'};
import Time from '../components/Time.tsx';

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .25rem;
    
    height: 4rem;
    padding: .5rem 1rem;
    
    color: #aaa;
    
    @media(min-width: 720px) {
        flex-direction: row;
        gap: 2.25rem;
    }
    
    p {
        margin: 0;
        text-indent: 0;
        text-align: center;
    }
    
`;

export default function Footer(){
    return (
        <Container className={'notranslate'} translate={'no'}>
            <p className={'copyright'}>
                Copyright 2026 Dowol. All rights reserved.
            </p>

            <p>Last update: <Time dateTime={version} format={'YYYY-MM-DD'}/></p>
        </Container>
    )
}
