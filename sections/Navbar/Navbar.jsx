import React, { useEffect } from 'react';
import './navbar.scss';

import { AiOutlineMenu } from 'react-icons/ai'

import { Link } from 'react-router-dom';

function Navbar() {

    useEffect(() => {

        /* Navbar toggler */
        const toggleBtn = document.querySelector(".navbar-toggler");
        const navbarNav = document.querySelector(".navbar-nav");
        const navCloseBtn = document.querySelector(".btn-nav-close");

        toggleBtn.addEventListener("click", () => {
            navbarNav.classList.toggle("active");
        });
        navCloseBtn.addEventListener("click", () => {
            navbarNav.classList.remove("active");
        });

        /* Add icon on .nav-item if dropdown exists */
        const navItems = document.querySelectorAll(".nav-item");

        navItems.forEach((item) => {
            const hasDropdowns = item.querySelector(".dropdown") !== null;
            if (hasDropdowns) {
                item.classList.add("icon");
            }
        });

        /* add Sticky Class to navbar when Scroll down */

        window.onscroll = function () {

            let navbar = document.querySelector('.navbar');

            if (document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

    }, []);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand px-5">
                    <h4 style={{ fontWeight: 'bold', cursor: 'pointer' }}>Your Logo</h4>
                </div>
                <button className="navbar-toggler">
                    <AiOutlineMenu aria-hidden="true" />
                </button>
                <ul className="navbar-nav">
                    <li className="nav-close">
                        <button className="btn-nav-close">
                            <span className="close-btn">+</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                        <ul className="dropdown">
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/">Home Demo 1</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/home-2">Home Demo 2</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/home-3">Home Demo 3</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/about-1" className="nav-link">About</a>
                        <ul className="dropdown">
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/about-1">About 1</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/about-1">About 2</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/services" className="nav-link">Packages</a>
                        <ul className="dropdown">
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/all-packages">All Packages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/packages-grid">Packages Grid</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/packages-simple">Packages Simple</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/package-detail">Package Detail</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/pricing" className="nav-link">Pages</a>
                        <ul className="dropdown">
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/tours">Tours</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/hotels">Hotels</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/cities">Cities</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/branding">Branding</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/price">Price</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/faq">Faq</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/testimonials">Testimonials</Link>
                            </li>

                            <li className="nav-item">
                                <a href="/login" className="nav-link">Auth </a>
                                <ul className="dropdown">
                                    <li className="nav-item">
                                        <Link className='text-sm text-gray-400' to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='text-sm text-gray-400' to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='text-sm text-gray-400' to="/forget-password">Forget Password</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/comming-soon">Comming Soon</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/404">404 Error</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/blog" className="nav-link">Blog</a>
                        <ul className="dropdown">
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/blog-list">Blog List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-sm text-gray-400' to="/blog-single">Blog Single</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div>
                    <button className='px-5 py-1 text-sm rounded-md bg-red-500 text-white'>Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar