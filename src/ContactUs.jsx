import { useState } from "react"
import Footer from "./Footer"
import Header from "./common/Header"
import { InputText } from "./common/InputText"
import { Button } from "react-bootstrap"

export const ContactUs = () => {
  const [contactUsForm, setContactUsForm] = useState({})

  const handleChange = (field, value) => {
    setContactUsForm({ ...contactUsForm, [field]: value })
  }

  const handleInput = (event) => {
    let { name, value } = event.target
    handleChange(name, value)
  }
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center text-color text"> Contact Us </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between" style={{ background: '#F7F7F7', height: '573px', width: '1632px' }}  >
          <div className="d-flex justify-content-center align-items-center" style={{ width: '816px' }}>
            <div>
              <div className="py-2" style={{ fontSize: '38px' }}>PrimeSynth Inc.</div>
              <div className="p-1"> 6660 Kennedy Road, Mississauga</div>
              <div className="p-1">L5T2M9, Ontario, Canada</div>
              <div className="p-1">sales@primesynth.com</div>
              <div className="p-1">+1-888-556-7105</div>
            </div>
          </div>
          <div className="" style={{ width: '816px' }}>
            <div className="">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-3">
                  <InputText
                    name="name"
                    label="Name"
                    required
                    value={contactUsForm?.name}
                    onChange={handleInput}
                  />
                </div>
                <div className="p-3">
                  <InputText
                    name="email"
                    label="Email"
                    required
                    value={contactUsForm?.email}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-3">
                  <InputText
                    name="phone"
                    label="Phone"
                    required
                    value={contactUsForm?.phone}
                    onChange={handleInput}
                  />
                </div>
                <div className="p-3">
                  <InputText
                    name="country"
                    label="Country"
                    required
                    value={contactUsForm?.country}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-3">
                  <InputText
                    name="subject"
                    label="Subject"
                    required
                    value={contactUsForm?.subject}
                    onChange={handleInput}
                  />
                </div>
                <div className="p-3">
                  <InputText
                    name="message"
                    label="Message"
                    required
                    value={contactUsForm?.message}
                    onChange={handleInput}
                  />
                </div>
              </div>

            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button type="primary">Submit</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}