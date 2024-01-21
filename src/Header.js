import { SearchBar } from './SearchBar';
import logo from './svg/Primesynth.png'
function Header() {
    return (
        <div className='d-flex'>
            <div className='d-flex align-items-center' style={{ paddingLeft: "50px" }}><img src={logo} alt="logo" /></div>
            <div className='d-flex w-50 align-items-center'> <SearchBar /></div>
            <div className="d-flex align-items-center p-3"><a href="/" className='anchor-text'> Home </a></div>
            <div className="d-flex align-items-center p-3"><a href="/products-by-category" className='anchor-text'> Products </a></div>
            <div className="d-flex align-items-center p-3"><a href="/contact-us" className='anchor-text'><span> Contact US </span></a></div>
            <div className="d-flex align-items-center p-3"><a href="/contact-us" className='anchor-text'>Services </a></div>
            <div className="d-flex align-items-center p-3"><a href="/contact-us" className='anchor-text'>About Us </a></div>
        </div>
    );
}

export default Header;
