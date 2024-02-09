import Button from 'react-bootstrap/Button';
import Header from './common/Header';
import Footer from './common/Footer';
import logo from './svg/second-img.png'
import firstLogo from './svg/first-img.png'

export default function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="App pt-100">
        <div ><img src={logo} alt="logo" style={{ width: '1792px', height: '750px' }} /></div>
        <div className="d-flex justify-content-center align-items-center" >PrimeSynth is a reliable supplier of reference standards, API impurities, R&D Chemicals & Custom synthesis products</div>
        <div className="d-flex justify-content-center align-items-center text text-color" style={{ fontSize: '50px' }}>Our Products</div>
        <div className="d-flex justify-content-center align-items-center">
          <div >
            <p>No matter what you are searching for, we’ve got all the products you could possibly need.We ensure our clients receive only the best quality products for their analytical and research work. </p>
            <p className='d-flex justify-content-center align-items-center'>Check out our list of inventory below and feel free to contact us. </p>
            <p className='d-flex justify-content-center align-items-center'>Checkout our product catalogue or search in any products by CAT no., CAS no. or Product name </p>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center p-3'>
          <Button variant="primary" className='btn-background'>Browse</Button>
        </div>
        <div>
          <div><img src={firstLogo} alt="logo" style={{ width: '1792px', height: '750px' }} /></div>
        </div>
        <div className='d-flex justify-content-center align-items-center' >
          <div>
            <div>If you’re looking for a specific product and can’t find it. One of our staff members will be happy to assist you.</div>
            <div className='d-flex justify-content-center align-items-center'> <Button type='primary' className='btn-background m-3'> Get in Touch</Button></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}