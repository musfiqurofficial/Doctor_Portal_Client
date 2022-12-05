import React from 'react';
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const HomeTestimonial = () => {
    return (
        <div className='bg-base-100 my-16'>
            <div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <p className='mb-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions justify-start items-center">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={people1} alt='' />
                                </div>
                            </div>
                            <div className='ml-2'>
                                <h6 className='font-bold text-primary'>Winson Herry</h6>
                                <p className='text-sm'>California</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <p className='mb-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions justify-start items-center">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={people2} alt='' />
                                </div>
                            </div>
                            <div className='ml-2'>
                                <h6 className='font-bold text-primary'>Scarlett Johansson</h6>
                                <p className='text-sm'>New York</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <p className='mb-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions justify-start items-center">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={people3} alt='' />
                                </div>
                            </div>
                            <div className='ml-2'>
                                <h6 className='font-bold text-primary'>Emma Watson</h6>
                                <p className='text-sm'>Paris</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTestimonial;