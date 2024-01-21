import Footer from "./Footer"
import Header from "./common/Header"

export const ProductsCategory = () => {
    return (
        <>
        <Header />
            <div className="d-flex justify-content-center text"> Our Products</div>
            <div className="d-flex justify-content-center">
                <div>
                    <div style={{ width:'200px'}} className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1"><a href="/allProducts" className="anchor-text text-light">All Products</a></div> 
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1 "><a href="/sort/a" className="anchor-text text-light">A </a></div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">B</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">C</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">D</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">E</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">F</div>
                </div>
                <div className="row">
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">G</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">H</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">I</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">J</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">K</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">L</div>
                </div>
                <div className="row">
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">M</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">N</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">O</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">P</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">Q</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange my-3 mx-1">R</div>
                </div>
                <div className="row">
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange m-3 mx-1">S</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange m-3 mx-1">T</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange m-3 mx-1">U</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange m-3 mx-1">V</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange m-3 mx-1">W</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange m-3 mx-1">X</div>
                </div>
                <div className="row">
                    <div className="col p-2 d-flex justify-content-center align-items-center "></div>
                    <div className="col p-2 d-flex justify-content-center align-items-center m-3 mx-1"></div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange m-3 mx-1">Y</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center bg-orange m-3 mx-1">Z</div>
                    <div className="col p-2 d-flex justify-content-center align-items-center m-3 mx-1"></div>
                    <div className="col p-2 d-flex justify-content-center align-items-center "></div>
                </div>
            </div>
        <Footer />
        </>
    )
}