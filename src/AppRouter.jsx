import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  App  from './App'
import { PageNotFound } from './PageNotFound'
import { ContactUs } from './ContactUs'
import { ProductsCategory } from './ProductsCategory'
import { SortByAlphabet } from './SortByAlphabet'
import { ProductDescription } from './ProductDescription'
import { GetQuote } from './GetQuote'
import { AllProducts } from './AllProducts'
import { SearchBar } from './common/SearchBar/SearchBar'

export const AppRouter = () => {

  return (
    <Routes>
      {/* <Route path='/' element={<DeveloperPortal {...props}/>} /> */}
      <Route path='/' element={<App/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/products-by-category' element={<ProductsCategory/>} />
      
      <Route path='/sort/:id' element={<SortByAlphabet/>}/>
      <Route path='/allProducts' element={<AllProducts/>}></Route>
      {/* <Route path='/product-page/:productName' element={<ProductDescription/>}/> */}
      <Route path='/product/:productId' element={<ProductDescription/>} />
      <Route path='/get-quote' element={<GetQuote/>} />
      <Route path='/test-searchbar' element={<SearchBar/>} />
      {/* <Route path='software-catalog' element={<SoftwareCatalog {...props}/>}>
        <Route index element={<ApiExplorer />} />
        <Route path='create-component' element={<CreateAPI />} />
        <Route
          path='component/api/:id/add-environment'
          element={<CreateAPI defaultStep={1} createEnv />}
        />
        <Route path='component/api/:id' element={<ApiDetailsContainer />} />
        <Route
          path='component/api/:id/openapi'
          element={<SwaggerContainer />}
        />
      </Route> */}
      {/* <Route path ="account">
        <Route index element={<Redirect to="/" isRelative/>}/>
        <Route path="dcl" element={<Redirect to="/account/cimpress-designer" isRelative/>} />
        <Route path="cimpress-designer" element={<Redirect to="https://accounts.cimpress.io/api-keys"/>} />
      </Route> */}
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
