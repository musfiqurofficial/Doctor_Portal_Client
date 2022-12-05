import React from 'react';
import { NavLink } from 'react-router-dom';
import chair from "../../../assets/images/chair.png";

const HeroArea = () => {
    return (
        <div className='hero-container lg:py-28 py-10'>
            <div className="w-10/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl shadow-slate-300" alt='' />
                    <div className='lg:w-1/2 lg:pr-6 my-10 lg:my-0 '>
                        <h1 className="lg:text-5xl text-3xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <NavLink to='/loginForm' className="btn text-base-100 linear-gradient border-none hover:bg-secondary hover:border-none my-2 ">Get started</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;