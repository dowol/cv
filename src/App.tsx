import styled from '@emotion/styled';
import {BrandLogo} from './Header.tsx';
import {Navigator} from "./Navigator.tsx";
import Main from './Main.tsx';

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
`;

function App() {
    return (
        <>
            <Header>
                <div>
                    <BrandLogo/>
                    <Navigator/>
                </div>
            </Header>
            <Main/>
            <Footer>
            </Footer>
        </>
    )
}

export default App;
