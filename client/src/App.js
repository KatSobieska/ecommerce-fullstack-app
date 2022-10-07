import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/features/Cart/Cart';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Homepage from './components/pages/Homepage/Homepage';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
