import React from 'react';
import { NavLink } from 'react-router-dom';
import doctor from "../../../assets/images/doctor.png";
const HomeAppointment = () => {
    return (
        <div className='appointment-container lg:py-5 py-5 relative lg:mt-16'>
            <div className="w-10/12 mx-auto ">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-between">
                    <div className='lg:w-3/4 lg:pl-8 my-10 lg:my-0 text-base-100'>
                        <p className='text-md font-bold text-secondary uppercase'>Appointment</p>
                        <h1 className="lg:text-5xl text-3xl font-bold my-2">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <NavLink to='/loginForm' className="btn text-base-100 linear-gradient border-none hover:bg-secondary hover:border-none my-2 ">Appointment</NavLink>
                    </div>
                    <div className='lg:block hidden'>
                        <img src={doctor} className="lg:max-w-lg lg:absolute left-0 bottom-0" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;