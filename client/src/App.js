import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './components/features/AllProducts/AllProducts';
import Cart from './components/features/Cart/Cart';
import Necklaces from './components/features/Necklaces/Necklaces';
import OrderForm from './components/features/OrderForm/OrderForm';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import NavBar from './components/layout/NavBar/NavBar';
import Article from './components/pages/Article/Article';
import Homepage from './components/pages/Homepage/Homepage';
import ProductPage from './components/pages/ProductPage/ProductPage';

function App() {
  return (
    <main>
      <Header />
      <NavBar />

      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/articles/:articleId" element={<Article />} />
          <Route path="/orderForm" element={<OrderForm />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/category/:category" element={<Necklaces />} />
          <Route path="/:productId" element={<ProductPage />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
