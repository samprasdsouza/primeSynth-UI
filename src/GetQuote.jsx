import { useState } from "react"
import Footer from "./common/Footer"
import Header from "./common/Header"
import { InputText } from "./common/InputText"
import { Button } from "react-bootstrap"

export const GetQuote = () => {
    const [QuoteForm, setQuoteForm] = useState({})

    const handleChange = (field, value) => {
        setQuoteForm({ ...QuoteForm, [field]: value })
    }

    const handleInput = (event) => {
        let { name, value } = event.target
        handleChange(name, value)
    }

    return (
        <>
            <Header />
            <div className="pt-100">
                <div className="d-flex justify-content-center">
                    <span className="text text-color">Get a Quote</span>
                </div>
                <div className="d-flex justify-content-center">
                    <span className="text-14">Get in touch with us to get an online quotation</span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <div className="d-flex">
                            <div className="p-3">
                                <InputText
                                    name="firstName"
                                    label="First Name"
                                    required
                                    value={QuoteForm?.firstName}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="p-3">
                                <InputText
                                    name="lastName"
                                    label="Last Name"
                                    required
                                    value={QuoteForm?.lastName}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="p-3">
                                <InputText
                                    name="companyName"
                                    label="Company Name"
                                    required
                                    value={QuoteForm?.companyName}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="p-3">
                                <InputText
                                    name="countryName"
                                    label={"Country"}
                                    value={QuoteForm?.countryName}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="p-3">
                                <InputText
                                    name="email"
                                    label={"Email"}
                                    value={QuoteForm?.email}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="p-3">
                                <InputText
                                    name="productName"
                                    label={"Product Name"}
                                    value={QuoteForm?.productName}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="p-3">
                                <InputText
                                    name="CAS"
                                    label={"CAS Name"}
                                    value={QuoteForm?.CAS}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="p-3">
                                <InputText
                                    name="CAT"
                                    label={"CAT Name"}
                                    value={QuoteForm?.CAT}
                                    onChange={handleInput}
                                />
                            </div>

                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <Button type="primary" >Get Quote</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}