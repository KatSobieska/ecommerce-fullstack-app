import { Container } from 'react-bootstrap';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Footer />
      </Container>
    </main>
  );
}

export default App;
