import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { CartProvider } from './data/Cart';
import { About } from './pages/About/About';
import { Catalog } from './pages/Catalog/Catalog';
import { Store } from './pages/Store/Store';
import { Home } from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { SingleProductPage } from './pages/SingleProductPage/SingleProductPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ErrorPage from './pages/ErrorPage/ErrorPage';

export default function App() {
    return (
        <CartProvider>
            <ScrollToTop />
            <Header />
            <main>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/store' element={<Store />} />
                        <Route path='/catalog/:id' element={<SingleProductPage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<ErrorPage/>} />
                    </Routes>
                </div>
            </main>
            <Footer />
            <ToastContainer position="bottom-right" autoClose={3000} />
        </CartProvider>
    );
}
