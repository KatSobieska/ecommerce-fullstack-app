import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/features/AllProducts/AllProducts";
import Cart from "./components/features/Cart/Cart";
import CategoryProducts from "./components/features/CategoryProducts/CategoryProducts";
import OrderForm from "./components/features/OrderForm/OrderForm";
import ScrollToTop from "./components/features/ScrollToTop/ScrollToTop";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import NavBar from "./components/layout/NavBar/NavBar";
import Article from "./components/pages/Article/Article";
import Homepage from "./components/pages/Homepage/Homepage";
import Login from "./components/pages/Login/Login";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import Register from "./components/pages/Register/Register";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/orderForm" element={<OrderForm />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="/:category" element={<CategoryProducts />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </ScrollToTop>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
