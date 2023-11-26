import Button from 'react-bootstrap/Button';
import Header from './Header';
import Footer from './Footer';
import logo from './svg/second-img.png'
import firstLogo from './svg/first-img.png'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { getProductsStart } from './store/slices/productSlice';
import { createAction } from '@reduxjs/toolkit';

const getProductsStart = createAction('users/getProductsStart')

export default function App() {
  
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getProductsStart())
  }, [dispatch, getProductsStart])
  return (
    <>
    <Header/>

    <div className="App">
      <div ><img src={logo} alt="logo" style={{ width: '1792px',height:'750px'}}/></div>
      <div className="d-flex justify-content-center align-items-center" >PrimeSynth is a reliable supplier of reference standards, API impurities, R&D Chemicals & Custom synthesis products</div>
      <div className="d-flex justify-content-center align-items-center">Our Products</div>
      <div>No matter what you are searching for, we’ve got all the products you could possibly need. We ensure our clients receive only the best quality products for their analytical and research work. Check out our list of inventory below and feel free to contact us.Checkout our product catalogue or search in any products by CAT no., CAS no. or Product name </div>
      <div className='d-flex justify-content-center align-items-center'>
        <Button variant="primary" >Browse</Button>
      </div>
      <div>
        <div><img src={firstLogo} alt="logo" style={{ width: '1792px',height:'750px'}}/></div>
      </div>
      <div className='d-flex justify-content-center align-items-center' >
        <div>
          <div>If you’re looking for a specific product and can’t find it. One of our staff members will be happy to assist you.</div>
          <div className='d-flex justify-content-center align-items-center'> <Button type='primary'> Get in Touch</Button></div>
        </div>
      </div>
    <Footer/>
    </div>
  </>
  );
}