import styled from "@emotion/styled";
import type {PropsWithChildren} from "react";

const Title = styled.h2`
    text-align: center;
    font-size: 1.625rem;
    font-weight: 400;
    
    
    & > span {
        color: white;
        
        &:before, &:after {
            color: #aaa;
            font-family: 'Fira Code', monospace;
        }
        
        &:before {
            content: '<';
            padding-right: .375rem;
        }
        
        &:after {
            content: '/>';
            padding-left: .375rem;
        }
    }
    
    @media(min-width: 480px) {
        font-size: 2.25rem;
    }
    @media(min-width: 840px) {
        font-size: 2.75rem;
    }
`;

export function SectionTitle({children}: Readonly<PropsWithChildren>){
    return (
        <Title><span>{children}</span></Title>
    )
}