import { SearchBar } from '../SearchBar/SearchBar';
import logo from '../../svg/Primesynth.png'
function Header() {
    return (
        <div className='header d-flex' style={{ height : '100px'}}>
            <div className='d-flex align-items-center'><img src={logo} alt="logo" /></div>
            <div className='d-flex w-50 align-items-center'> <SearchBar /></div>
            <div className="d-flex align-items-center p-3"><a href="/" className='anchor-text'> Home </a></div>
            <div className="d-flex align-items-center p-3"><a href="/products-by-category" className='anchor-text'> Products </a></div>
            <div className="d-flex align-items-center p-3"><a href="/contact-us" className='anchor-text'><span> Contact US </span></a></div>
            {/* <div className="d-flex align-items-center p-3"><a href="/contact-us" className='anchor-text'>Services </a></div> */}
            <div className="d-flex align-items-center p-3"><a href="/about-us" className='anchor-text'>About Us </a></div>
        </div>
    );
}

export default Header;
