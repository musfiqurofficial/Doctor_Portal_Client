import React from 'react';
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const OurServices = () => {
    return (
        <div className='lg:w-11/12 w-8/12 mx-auto my-10'>
            <div className='text-center mb-8'>
                <h4 className='text-lg font-bold text-secondary uppercase'>Our Services</h4>
                <h2 className='font-semibold text-4xl'>Services We Provide</h2>
            </div>
            <div className='lg:grid md:grid lg:grid-cols-3 gap-6 items-center'>
                <div className="card bg-neutral shadow-md">
                    <div className="card-body items-center text-center text-base-700">
                        <div>
                            <img src={fluoride} className='w-18 py-2' alt="" />
                        </div>
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className="card bg-neutral shadow-md">
                    <div className="card-body items-center text-center text-base-700">
                        <div>
                            <img src={cavity} className='w-18 py-2' alt="" />
                        </div>
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className="card bg-neutral shadow-md">
                    <div className="card-body items-center text-center text-base-700">
                        <div>
                            <img src={whitening} className='w-18 py-2' alt="" />
                        </div>
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;