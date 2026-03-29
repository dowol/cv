import styled from '@emotion/styled';
import {type ReactNode, useCallback, useRef} from 'react';
import {getLanguage, locales} from '../util/lang';

interface NavigationInfo extends Record<string, unknown> {
    href: string;
    title: ReactNode;
    subtitle?: ReactNode;
}

const nav: NavigationInfo[] = [
    {
        href: '#intro',
        title: 'Intro',
    },
    {
        href: '#about',
        title: 'About',

    }, {
        href: '#timeline',
        title: 'Timeline'
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

    i.bi {
        font-size: 2em;
    }

    a:hover {
        text-decoration: none;
    }
`;

const AliasesModal = styled.dialog`
    background-color: #1a1a1a;
    border: none;
    border-radius: .375rem;

    top: 4rem;
    margin: 0 auto;

    animation: fade-in .375s forwards;

    @media (min-width: 720px) {
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
        color: var(--color-indigo);
    }


    &:before {
        color: lightgray;
        content: '#';
    }

    @media (min-width: 720px) {

        padding: 0 .5rem;
        line-height: 3rem;
    }
`;

const ToggleAliasesButton = styled.button`
    width: 48px;
    height: 48px;
    background: transparent;
    padding: 0;
    display: flex;
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
`;

const LanguagesModal = styled.dialog`
    animation: fade-in .375s forwards;
    background-color: #1a1a1a;
    border: none;
    border-radius: .375rem;
    color: inherit;


    &::backdrop {
        background-color: rgba(0, 0, 0, .75);
        animation: inherit;
    }

    & h6 {
        margin: 0 1rem 1rem 1rem;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;

    }
`;

const LanguageList = styled.ul`
    list-style: none;

    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;

    @media (min-width: 720px) {
        flex-direction: row;
        column-gap: 1rem;
        justify-content: space-evenly;
        
    }

`;

const LanguageItem = styled.li`
    display: flex;
`;

const LanguageLink = styled.a`
    text-align: center;
    color: white;
    transition: color .25s ease-in-out;
    padding: .5rem;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    font-size: 1.25rem;

    &:hover {
        color: var(--color-indigo);
    }

    & > img {
        height: 1.25em;
    }
`;

const ToggleLanguagesButton = styled.button`
    width: 48px;
    height: 48px;
    background: transparent;
    padding: 0;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        height: 2rem;
    }

    color: inherit;
    border: 1px solid #aaa;
    border-radius: 24px;


    &:hover {
        border-color: #aaa;
    }

    &:focus {
        outline: none;
    }

`;


export function Navigator() {
    const lang = getLanguage();

    const aliasesModalRef = useRef<HTMLDialogElement>(null);
    const languagesModalRef = useRef<HTMLDialogElement>(null);

    const onOpenAliases = useCallback(() => {
        aliasesModalRef.current?.showModal();
    }, []);

    const onCloseAliases = useCallback(() => {
        aliasesModalRef.current?.close();
    }, []);

    const onOpenLanguages = useCallback(() => {
        languagesModalRef.current?.showModal();
    }, []);

    const onCloseLanguages = useCallback(() => {
        languagesModalRef.current?.close();
    }, []);

    // const languageName = useMemo(() => new Intl.DisplayNames('en', {type: 'language'}), []);

    return (
        <Nav>
            <ToggleLanguagesButton onClick={onOpenLanguages} title={'Click here to Change Language'}>
                <img src={`/images/lang/${lang}.svg`} alt={'Change Language'}/>
            </ToggleLanguagesButton>
            <ToggleAliasesButton onClick={onOpenAliases}>
                <i className={'bi bi-list'}/>
            </ToggleAliasesButton>
            <AliasesModal ref={aliasesModalRef} onClick={onCloseAliases}>
                <NavList>
                    {
                        nav.map(({href, title}) => (
                            <NavItem key={href}>
                                <NavLink href={href} translate={'no'} className={'notranslate'}>
                                    {title}
                                </NavLink>
                            </NavItem>
                        ))
                    }
                </NavList>
            </AliasesModal>
            <LanguagesModal ref={languagesModalRef} onClick={onCloseLanguages}>
                <h6>Choose your language</h6>
                <LanguageList translate={'no'} className={'notranslate'}>
                    {
                        locales.map((lang) => (
                            <LanguageItem key={lang}>
                                <LanguageLink href={'?lang=' + lang}>
                                    <img src={`/images/lang/${lang}.svg`} alt={undefined}/>
                                    {new Intl.DisplayNames(lang, {type: 'language'}).of(lang)}
                                </LanguageLink>
                            </LanguageItem>
                        ))
                    }
                </LanguageList>
            </LanguagesModal>
        </Nav>
    )
}