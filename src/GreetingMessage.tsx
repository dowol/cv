import {useLanguage} from "./util/lang.ts";
import styled from "@emotion/styled";

const Heading = styled.h1`
    display: flex;
    flex-flow: column nowrap;

    margin: 0;

    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.25;

    text-transform: uppercase;

    @media (min-width: 480px) {
        font-size: 3rem;
    }

    @media (min-width: 720px) {
        text-align: right;
    }

    @media (min-width: 840px) {
        font-size: 4rem;
    }

    animation: fade-in .75s ease-out forwards;

    strong {
        color: var(--color-indigo);
        font-weight: 600;
    }
`;


export default function GreetingMessage() {
    const lang = useLanguage();
    switch (lang) {
        case 'ko':
            return (
                <Heading>
                    <span>안녕하세요</span> <span>개발자 <strong>도월</strong>입니다</span>
                </Heading>
            );

        case 'fr':
            return (
                <Heading>
                    <span>Enchanté</span> <span>Je suis <strong>Dowol</strong> <br/>le développeur</span>
                </Heading>
            );

        case 'ja':
            return (
                <Heading>
                    <span>はじめまして</span> <span>開発者の<strong>ドウオル</strong>と<br/>申します</span>
                </Heading>
            );

        default:
            return (
                <Heading>
                    <span>Hello</span> <span>I am <strong>Dowol</strong> <br/>the Developer</span>
                </Heading>
            );
    }
}