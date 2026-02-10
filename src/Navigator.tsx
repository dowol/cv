import styled from "@emotion/styled";
import {type ReactNode, useCallback, useRef} from "react";
import {Icon} from '@iconify/react';

interface NavigationInfo extends Record<string, unknown> {
    href: string;
    title: ReactNode;
    subtitle?: ReactNode;
}

const nav: NavigationInfo[] = [
    {
        href: '#intro',
        title: 'Intro'
    },
    {
        href: '#about',
        title: 'About',

    }, {
        href: '#timeline',
        title: 'Timeline'
    }, {
        href: '#skills',
        title: 'Skills'
    }
];


const Nav = styled.nav`
    display: flex;

    flex-direction: row;
    align-items: stretch;
    justify-content: flex-end;
    
    @media (min-width: 720px) {
        flex-direction: row;

    }
`;

const NavModal = styled.dialog`
    background-color: #1a1a1a;
    border: none;
    border-radius: .375rem;
    
    top: 4rem;
    margin: 0 auto;

    animation: fade-in .375s forwards;
    
    @media (min-width: 720px){
        display: contents;
    }
    
    &::backdrop {
        background-color: rgba(0, 0, 0, .75);
        animation: inherit;
    }
`;

const NavList = styled.ul`
    padding-left: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: .25rem;
    margin: 0;
    
    width: calc(100vw - 8rem);
    
    @media (min-width: 720px) {
        width: unset;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        
    }
`;

const NavItem = styled.li`
    display: flex;
    align-items: stretch;
    justify-content: stretch;


    @media (min-width: 720px) {
        align-items: center;
        
    }
`;

const NavLink = styled.a`
    color: white;
    line-height: 2rem;
    width: 100%;
    text-align: center;
    transition: color .375s ease-in-out;
    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Mono', sans-serif;
    
    &:visited {
        color: white;
    }
    
    &:hover {
        color: #ffcb05;
    }

    
    &:before {
        color: lightgray;
        content: '#';
    }
    
    @media(min-width: 720px) {

        padding: 0 .5rem;
        line-height: 3rem;
    }
`;

const ToggleButton = styled.button`
    width: 48px;
    height: 48px;
    background: transparent;
    padding: 0;
    display:flex;
    align-items: center;
    justify-content: center;
    
    & .iconify {
        font-size: 2rem;
    }
    
    color: inherit;
    border-radius: 24px;
    
    &:hover {
        border-color: white;
    }
    
    &:focus {
        outline: none;
    }
    
    @media (min-width: 720px) {
        display: none;
    }
`


export function Navigator() {
    const modalRef = useRef<HTMLDialogElement>(null);

    const onOpen = useCallback(() => {
        modalRef.current?.showModal();
    }, []);

    const onClose = useCallback(() => {
        modalRef.current?.close();
    }, []);

    return (
        <Nav>
            <ToggleButton onClick={onOpen}>
                <Icon icon={'bi:list'}/>
            </ToggleButton>
            <NavModal ref={modalRef} onClick={onClose}>
                <NavList>
                    {
                        nav.map(({href, title}) => (
                            <NavItem key={href}>
                                <NavLink href={href}>{title}</NavLink>
                            </NavItem>
                        ))
                    }
                </NavList>
            </NavModal>
        </Nav>
    )
}