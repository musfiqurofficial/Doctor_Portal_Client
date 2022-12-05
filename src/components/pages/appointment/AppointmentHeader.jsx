import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from "../../../assets/images/chair.png";

const AppointmentHeader = ({ selectedDate, setSelectedDate }) => {
    
    return (
        <div className='hero-container lg:py-28 py-10'>
            <div className="w-10/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl shadow-slate-300" alt='' />
                    <div className='lg:ml-24 my-8 lg:my-0 '>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AppointmentHeader;