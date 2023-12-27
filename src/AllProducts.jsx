import Footer from "./Footer"
import Header from "./Header"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { getProductsStart } from './store/slices/productSlice';
import { createAction } from '@reduxjs/toolkit';
import { get, isEmpty } from "lodash";
import { CardBuilder } from "./common/Cards";
import  comp  from "./svg/PS-007299.png"
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const getProductsStart = createAction('users/getProductsStart')

export const AllProducts = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const productsData = useSelector(state => state.products)
    const products = get(productsData, ['products', 'data', '_embedded', 'products'], '')
    const nextPage = get(productsData, ['products', 'data', '_links', 'next', 'href'], '')

    useEffect(() =>{
        console.log('dispatch event');
        dispatch(getProductsStart())
    }, [dispatch, getProductsStart])

    
    console.log('products', products);

    const displaycards = products ? products.map((card) => ({
        TopImage: <div><img style={{ height: '250px', width: '250px'}} src={comp} alt="logo"/></div>,
        Title: (
          <div style={{ background:"#FFA800"}} className="p-2">
            <span className="text-light">CAT No. : {get(card, ["cat_no"])}</span>
          </div>
        ),
        cardStyle: isEmpty(card?.cardStyle)
          ? { height: '360px', width: '350px' }
          : card?.cardStyle,
        navigateTo: `/product-page/${get(card, ["product_name"], " ")}`,
        openInNewTab: true,
        styleBodyCenter: true
      })) : ''

    return(
        <>
        <Header/>
            all products
            {displaycards && <CardBuilder
                cards={displaycards}
                rowCardCount={6}
                title="All Services"
                cardCompleteComponentStyle={{ overflow: 'auto' }}
              />}
              <div className="d-flex justify-content-center">
                <Button className="p-3 m-2"> Prev </Button>
                <Button className="p-3 m-2" > Next </Button>
              </div>
        <Footer/>
        </>
    )
}
