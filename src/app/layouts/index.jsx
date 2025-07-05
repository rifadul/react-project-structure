import { Outlet } from 'react-router';
import Footer from '../../components/footer';
import Header from '../../components/header';

function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;
