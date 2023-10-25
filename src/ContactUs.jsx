import Footer from "./Footer"
import Header from "./Header"

export const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center text-color text-18"> Contact Us </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between" style={{ background: '#F7F7F7', height: '573px', width: '1632px' }}  >
          <div className="d-flex justify-content-center align-items-center" style={{ width: '816px'}}>
            <div>
              <div className="py-2" style={{ fontSize:'38px'}}>PrimeSynth Inc.</div>
              <div className="p-1"> 6660 Kennedy Road, Mississauga</div>
              <div className="p-1">L5T2M9, Ontario, Canada</div>
              <div className="p-1">sales@primesynth.com</div>
              <div className="p-1">+1-888-556-7105</div>
            </div>
          </div>
          <div className="" style={{ width: '816px'}}>
            Form
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}