import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const HomeCard = () => {
    return (
        <div className='lg:w-11/12 w-8/12 mx-auto my-10'>
            <div className='lg:grid md:grid lg:grid-cols-3 gap-6 items-center'>
                <div className="card linear-gradient text-primary-content p-2 shadow-md ">
                    <div className="card-body flex lg:flex-row md:flex-row lg:justify-between justify-center items-center ">
                        <div>
                            <img src={clock} className='w-18 p-1' alt="" />
                        </div>
                        <div className='pl-3 text-base-100'>
                            <h2 className="card-title">Opening Hours</h2>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-accent text-primary-content p-2 my-5 lg:my-0 md:my-0">
                    <div className="card-body flex lg:flex-row md:flex-row lg:justify-between justify-center items-center">
                        <div>
                            <img src={marker} className='w-18 p-1' alt="" />
                        </div>
                        <div className='pl-3 text-base-100'>
                            <h2 className="card-title">Opening Hours</h2>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                </div>
                <div className="card linear-gradient text-primary-content p-2">
                    <div className="card-body flex lg:flex-row md:flex-row lg:justify-between justify-center items-center">
                        <div>
                            <img src={phone} className='w-18 p-1' alt="" />
                        </div>
                        <div className='pl-3 text-base-100'>
                            <h2 className="card-title">Opening Hours</h2>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;