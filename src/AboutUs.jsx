import { Button } from "react-bootstrap"
import Footer from "./common/Footer"
import Header from "./common/Header"
import { useNavigate } from "react-router-dom"



export const AboutUs = () => {
    const navigate = useNavigate()
    const handleGetInTouch = () => {
        navigate('/contact-us')
    }

    return (
        <>
            <Header />
            <div className="pt-100">
                <div>
                    <div className="d-flex justify-content-center align-items-center">
                       <span style={{ fontSize: '50px',  color: '#12649B'}}> About Us </span>
                    </div>
                </div>
                <div className="p-3">
                    <div className="p-2"><span> PrimeSynth is a fast growing global research company expertises in the custom synthesis of pharmaceuticals reference standards, impurities, metabolites, stable isotopes and internal standards for LC/MS. We pride in providing high Quality, Integrity and best Customer Service with an agile approach. </span></div>

                    <div className="p-2"><span> Our goal is to support the scientific community in accelerating dynamic research by providing simple to complex compounds. </span></div>

                    <div className="p-2"><span>We ensure the highest product quality is delivered to the customers in  a cost effective manner. Our business and scientific team works closely with customers to provide customized solutions during the entire project process.</span></div>

                    <div className="p-2"><span> Our R&D facility is backed up by experienced scientists and new technology analytical instruments. Our customer base include national & international research-based/generic pharmaceutical companies, testing laboratories, universities and research institutions, CRO Labs, CDMO and so on. We are engaged in providing quick responses on inquiries and delivery of the product to the customers. </span></div>
                </div>
                <div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button type='primary' className='btn-background m-3' onClick={handleGetInTouch}> Get in Touch</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
