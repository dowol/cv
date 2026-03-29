import Providers from './layout/Providers.tsx';
import Header from "./layout/Header.tsx";
import Main from './layout/Main.tsx';
import Footer from "./layout/Footer.tsx";

export default function App() {

    return (
        <Providers>
            <Header/>
            <Main/>
            <Footer/>
        </Providers>
    );
}
