import styled from '@emotion/styled';
import {BrandLogo} from './Header.tsx';
import {Navigator} from "./Navigator.tsx";
import Main from './Main.tsx';
import {useLanguage} from "./util/lang.ts";
import dayjs from "dayjs";
import {Copyright} from "./Footer.tsx";
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from "./util/query.ts";

const Header = styled.header`
    display: flex;    
    height: 4rem;
    
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    
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


const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    height: 4rem;
    padding: .5rem 1rem;
    
    color: #aaa;
`;

function App() {
    const lang = useLanguage();
    dayjs.locale(lang);

    return (
        <QueryClientProvider client={queryClient}>
            <Header>
                <div>
                    <BrandLogo/>
                    <Navigator/>
                </div>
            </Header>
            <Main/>
            <Footer>
                <Copyright/>
            </Footer>
        </QueryClientProvider>
    )
}

export default App;
