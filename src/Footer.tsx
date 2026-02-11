import styled from '@emotion/styled';

const CopyrightContent = styled.p`
    margin: 0;
    text-align: center;
    
    @media(min-width: 480px) {
        br {
            display: none;
        }
    }
    
`;

export function Copyright() {
    return (
        <CopyrightContent className={'copyright'}>
            Copyright 2026 Dowol. <br/> All rights reserved.
        </CopyrightContent>
    )
}

export function FooterLink() {

}