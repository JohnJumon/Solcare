import Footer from './components/footer';
import Header from './components/layout/header';

function App(props: any) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

export default App;
