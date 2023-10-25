import Button from 'react-bootstrap/Button';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <div className="d-flex justify-content-center align-items-center">PrimeSynth is a reliable supplier of reference standards, API impurities, R&D Chemicals & Custom synthesis products</div>
      <div className="d-flex justify-content-center align-items-center">Our Products</div>
      <div>No matter what you are searching for, we’ve got all the products you could possibly need. We ensure our clients receive only the best quality products for their analytical and research work. Check out our list of inventory below and feel free to contact us.Checkout our product catalogue or search in any products by CAT no., CAS no. or Product name </div>
      <div className='d-flex justify-content-center align-items-center'>
        <Button variant="primary">Browse</Button>
      </div>
    <Footer/>
    </div>
  </>
  );
}

export default App;
