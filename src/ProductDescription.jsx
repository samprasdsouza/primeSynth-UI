import { useParams } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import logo from "./svg/PS-007299.png"


export const ProductDescription = () => {
    const { productName } = useParams()
    console.log(productName);
    return(
        <>
            <Header/>
            <div className="d-flex justify-content-center align-items-center" style={{ }}>
                <div className="d-flex p-3" style={{ width:'890px', height:'530'}}>
                    <div className=""  ><img style={{ border: '1px solid #FFA800' }} src={logo} alt="logo"></img></div>
                    <div>Details</div>
                </div>
            </div>
            

            <Footer/>
        </>
    )
}