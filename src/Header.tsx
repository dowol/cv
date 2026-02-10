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
    color: #FFCB05;
`;

const RootDomain = styled.span`
    color: #A07F78;
`;

const TopLevelDomain = styled.span`
    color: #6772A1;
`;

export function BrandLogo(){
    const lang = useLanguage();

    return (
        <LogoLink href={'/?lang=' + lang}>
            //<SubDomain>cv</SubDomain>.<RootDomain>dowol</RootDomain>.<TopLevelDomain>dev</TopLevelDomain>/
        </LogoLink>
    );
}

