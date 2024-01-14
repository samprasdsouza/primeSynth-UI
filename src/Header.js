import { SearchBar } from './SearchBar';
import logo from './svg/Primesynth.png'
function Header() {
    return (
        <div style={{ height:'200px'}} className="d-flex justify-content-between align-items-center">
            <div style={{paddingLeft: "100px"}}><img src={logo} alt="logo"/></div>
            <div>
                <div className="p-3"><SearchBar/></div>
            </div>
            <div className="d-flex">
                <div className="p-3"><a href="/" className='anchor-text'> Home </a></div>
                <div className="p-3"><a href="/products-by-category" className='anchor-text'> Products </a></div>
                <div className="p-3"><a href="/contact-us" className='anchor-text'> Contact US </a></div>
                <div className="p-3"><a href="/contact-us" className='anchor-text'>Services </a></div>
                <div className="p-3"><a href="/contact-us" className='anchor-text'>About Us </a></div>
            </div>

      </div>
    );
  }
  
  export default Header;
  