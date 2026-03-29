import styled from '@emotion/styled';
import {getLanguage} from "../util/lang.ts";
import {Navigator} from './Navigator.tsx';

const Container = styled.header`
    display: flex;    
    height: 4rem;
    
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 .125rem .25rem rgba(255, 255, 255, .125);
    
    
    background-color: #121212;
    
    & > div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
        padding: .5rem 1rem;
        
        > * {
            height: 100%;
        }
    }
`;

const LogoLink = styled.a`
    color: #AAA;
    font-weight: 400;
    font-size: 1.125rem;
    font-family: 'Fira Mono', 'Cascadia Mono', monospace;
    line-height: 3rem;
    

    &:hover {
        color: #AAA;
        text-decoration: none;
    }
    
    span {
        letter-spacing: initial;
        font-family: inherit;
    }
`;

const SubDomain = styled.span`
    color: var(--color-gold);
`;

const RootDomain = styled.span`
    color: var(--color-brown);
`;

const TopLevelDomain = styled.span`
    color: var(--color-indigo);
`;


function BrandLogo(){
    const lang = getLanguage();
    const query = new URLSearchParams(window.location.search);

    return (
        <LogoLink translate={'no'} className={'notranslate'} href={query.has('lang') ? '/?lang=' + lang : '/'}>
            //<SubDomain>cv</SubDomain>.<RootDomain>dowol</RootDomain>.<TopLevelDomain>dev</TopLevelDomain>/
        </LogoLink>
    );
}

export default function Header(){
    return (
        <Container>
            <div>
                <BrandLogo/>
                <Navigator/>
            </div>
        </Container>
    );
}
