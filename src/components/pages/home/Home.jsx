import React from 'react';
import HeroArea from './HeroArea';
import HomeAppointment from './HomeAppointment..jsx';
import HomeCard from './HomeCard';
import HomeContact from './HomeContact';
import HomeTerms from './HomeTerms';
import HomeTestimonial from './HomeTestimonial';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <div><HeroArea></HeroArea></div>
            <div><HomeCard></HomeCard></div>
            <div><OurServices></OurServices></div>
            <div><HomeTerms></HomeTerms></div>
            <div><HomeAppointment></HomeAppointment></div>
            <div><HomeTestimonial></HomeTestimonial></div>
            <div><HomeContact></HomeContact></div>
        </div>
    );
};

export default Home;