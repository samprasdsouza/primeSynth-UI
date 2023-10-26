import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { InputText } from "./common/InputText"

export const GetQuote = () => {
    const [QuoteForm, setQuoteForm] = useState({})

    const handleChange = (field, value) => {
        setQuoteForm({ ...QuoteForm, [field]: value })
    }

    const handleInput = (event) => {
        let {name, value} = event.target
        console.log(name, value);
        handleChange(name, value)
    }

    console.log(QuoteForm);
    return (
        <>
            <Header />
            <div>
                <div className="d-flex justify-content-center">
                    <span className="text text-color">Get a Quote</span>
                </div>
                <div className="d-flex justify-content-center">
                    <span className="text-14">Get in touch with us to get an online quotation</span>
                </div>  
                <div className=" d-flex justify-content-center">
                    <InputText
                    name="test"
                    value={QuoteForm?.test}
                    onChange={handleInput}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}