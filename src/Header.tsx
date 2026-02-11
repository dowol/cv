import styled from '@emotion/styled';
import {useLanguage} from "./util/lang.ts";

export default function Header(){

}

const LogoLink = styled.a`
    color: #AAA;
    font-weight: 400;
    font-size: 1.125rem;
    font-family: 'Fira Code', 'Cascadia Mono', monospace;
    line-height: 3rem;

    &:hover {
        color: #AAA;
    }
    
    span {
        letter-spacing: initial;
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

export function BrandLogo(){
    const lang = useLanguage();
    const query = new URLSearchParams(window.location.search);



    return (
        <LogoLink translate={'no'} className={'notranslate'} href={query.has('lang') ? '/?lang=' + lang : '/'}>
            //<SubDomain>cv</SubDomain>.<RootDomain>dowol</RootDomain>.<TopLevelDomain>dev</TopLevelDomain>/
        </LogoLink>
    );
}

