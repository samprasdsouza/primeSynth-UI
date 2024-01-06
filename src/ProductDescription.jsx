import { useNavigate, useParams } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import logo from "./svg/PS-007299.png"
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import { useEffect } from 'react'
import { Spinner } from "react-bootstrap";

const getProductStart = createAction('users/getProductStart')

export const ProductDescription = () => {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const navigate = useNavigate()
    const navigateToGetQuote = () => {
        navigate('/get-quote')
    }
    const product = useSelector(state => state.products.product)
    const isLoading = useSelector(state => state.products.loading)

    useEffect(() => {
        dispatch(getProductStart(productId))
    }, [dispatch, getProductStart])

    if (isLoading === true) {
        return(
            <div className="d-flex justify-content-center align-items-center">
                <Spinner />
            </div>
        )
    }

    return (
        <>
            <Header />
            <div className="d-flex justify-content-center align-items-center" style={{}}>
                <div className="d-flex p-3" style={{ width: '890px', height: '530' }}>
                    <div className=""  ><img style={{ border: '1px solid #FFA800' }} src={logo} alt="logo"></img></div>
                    <div className="w-100">
                        <div className="w-100 d-flex justify-content-center ">
                            <div className="">{product.name}</div>
                        </div>
                        {/* start displaying the product data */}

                        <div className="w-100 h-100 d-flex align-items-center m-3">
                            <div>
                                <div className="w-100">For Pricing:</div>
                                <div>Connect with us via our contact page, Live Chat, Phone or Email </div>
                                <div style={{ color: 'red'}}> For research use only, not for diagnostic or therapeutic use.</div>
                                <div className="d-flex justify-content-center"> <Button  variant="primary" onClick={navigateToGetQuote}> Get Quote</Button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}