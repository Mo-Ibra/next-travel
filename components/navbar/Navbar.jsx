import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../assets/images/logo.png';

function Navbar() {

    const toggleNav = () => {
        let navbar = document.getElementById('myNavbar');
        navbar.classList.toggle('responsive');
    }

    return (
        <div className="navbar" id="myNavbar">
            <Image src={Logo} alt="Logo" id='logo' />
            <div>
                <a href="/" className="active">Home</a>
                <div className="dropdown">
                    <button className="dropdown-btn">About</button>
                    <div className="dropdown-content">
                        <a href="/about-1">About 1</a>
                        <a href="/about-2">About 2</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn">Pacakges</button>
                    <div className="dropdown-content">
                        <a href="/packages">All Packages</a>
                        <a href="/packages-grid">Packages Grid</a>
                        <a href="/packages-simple">Packages Simple</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn">Pages</button>
                    <div className="dropdown-content">
                        <a href="/tours">Tours</a>
                        <a href="/cities">Cities</a>
                        <a href="/hotels">Hotels</a>
                        <a href="/branding">Branding</a>
                        <a href="/faq">Faq</a>
                        <a href="/testimonials">Testimonials</a>
                        <a href="/price">Pricing</a>
                        <a href="/service">Service</a>
                        <a href="/soon">Soon</a>
                        <a href="/404">Not found</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn">Auth</button>
                    <div className="dropdown-content">
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                        <a href="/forget-password">Forget Password</a>
                    </div>
                </div>
                <a href="/contact">Contact</a>
            </div>
            <a href='#' className="icon" onClick={toggleNav}><AiOutlineMenu /></a>
        </div>
    )
}

export default Navbar