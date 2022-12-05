import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='w-11/12 mx-auto'>
                <footer className=" py-10 grid lg:grid-cols-3 md:grid-cols-3 ">
                    <div className='flex lg:flex-none md:flex-none flex-col items-center lg:items-start md:items-start'>
                        <p className="footer-title text-xl">Services</p>
                        <Link className="link link-hover text-base">Emergency Checkup</Link>
                        <Link className="link link-hover text-base">Monthly Checkup</Link>
                        <Link className="link link-hover text-base">Weekly Checkup</Link>
                        <Link className="link link-hover text-base">Deep Checkup</Link>
                    </div>
                    <div className='flex lg:flex-none md:flex-none flex-col items-center lg:items-center md:items-center my-5 lg:my-0 md:my-0'>
                        <p className="footer-title text-xl">ORAL HEALTH</p>
                        <Link className="link link-hover text-base">Fluoride Treatment</Link>
                        <Link className="link link-hover text-base">Cavity Filling</Link>
                        <Link className="link link-hover text-base">Teath Whitening</Link>
                    </div>
                    <div className='flex lg:flex-none md:flex-none flex-col items-center lg:items-end md:items-end'>
                        <p className="footer-title text-xl">OUR ADDRESS</p>
                        <Link className="link link-hover text-base">New York - 101010 Hudson</Link>
                    </div>
                </footer>
                <hr />
                <footer className="footer footer-center p-5">
                    <div>
                        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
            </div>
        </footer>
    );
};

export default Footer;