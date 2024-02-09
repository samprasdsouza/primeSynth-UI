import { useState } from "react"
import Footer from "./common/Footer"
import Header from "./common/Header"
import { InputText } from "./common/InputText"
import { Button } from "react-bootstrap"
import InputMultiSelect from "./common/InputMultiSelect"
import { countrylabel } from "./constants/countryName"
import { isEmpty, trim } from "lodash"

export const ContactUs = () => {
  const [contactUsForm, setContactUsForm] = useState({})
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
 
  const options = countrylabel

  const handleChange = (field, value) => {
    setContactUsForm({ ...contactUsForm, [field]: value })
  }

  const handleInput = (event) => {
    let { name, value } = event.target
    handleChange(name, value)
  }

  const validateText = (event) => {
    let { name, value } = event.target
    value = trim(value)
    handleChange(name, value)

    if (isEmpty(value)) {
      setErrors((prev) => ({ ...prev, [name]: 'Please provide a valid input' }))
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleMultiInput = (name, value) => {
    handleChange(name, value)
  }


  return (
    <>
      <Header />
      <div className="pt-100">
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
                  <div className="p-3 w-50">
                    <InputText
                      name="name"
                      label="Name"
                      required
                      value={contactUsForm?.name}
                      alertMessage={errors.name}
                      variant={!isEmpty(errors.name) ? 'error' : ''}
                      onChange={handleInput}
                      onBlur={validateText}
                    />
                  </div>
                  <div className="p-3 w-50">
                    <InputText
                      name="email"
                      label="Email"
                      required
                      value={contactUsForm?.email}
                      alertMessage={errors.email}
                      variant={errors.email ? 'error' : ''}
                      onChange={handleInput}
                      onBlur={validateText}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="p-3 w-50">
                    <InputText
                      name="phone"
                      label="Phone"
                      required
                      value={contactUsForm?.phone}
                      alertMessage={errors.phone}
                      variant={errors.phone ? 'error' : ''}
                      onChange={handleInput}
                      onBlur={validateText}
                    />
                  </div>
                  <div className="p-3 w-50">
                    <InputMultiSelect
                      name="country"
                      label="Country"
                      options={options}
                      required
                      value={contactUsForm?.country}
                      onChange={handleMultiInput}
                      isMulti={false}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="p-3 w-50">
                    <InputText
                      name="subject"
                      label="Subject"
                      required
                      value={contactUsForm?.subject}
                      alertMessage={errors.subject}
                      variant={errors.subject ? 'error' : ''}
                      onChange={handleInput}
                      onBlur={validateText}
                    />
                  </div>
                  <div className="p-3 w-50">
                    <InputText
                      name="message"
                      label="Message"
                      required
                      value={contactUsForm?.message}
                      alertMessage={errors.message}
                      variant={errors.message ? 'error' : ''}
                      onChange={handleInput}
                      onBlur={validateText}
                    />
                  </div>
                </div>

              </div>
              <div className="d-flex justify-content-center align-items-center">
                {/** send the contact payload to backend */}
                <Button type="primary" >Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}