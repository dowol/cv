import styled from '@emotion/styled';

const LogoLink = styled.a`
    color: #aaa;
    font-weight: 400;
    font-size: 1.125rem;
    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Mono', monospace;
    line-height: 3rem;

    &:hover {
        color: #aaa;
    }
    
    span {
        letter-spacing: initial;
    }

    .subd {
        color: #FFCB05;
    }
    
    .rootd {
        color: #A07F78;
    }
    
    .tld {
        color: lightskyblue;
    }
`;

export function BrandLogo(){
    return (
        <LogoLink href={'/'}>
            //<span className={'subd'}>cv</span>.<span className={'rootd'}>dowol</span>.<span className={'tld'}>dev</span>
        </LogoLink>
    );
}

