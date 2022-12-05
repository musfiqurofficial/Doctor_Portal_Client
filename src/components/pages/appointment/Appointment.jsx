import React, { useState } from 'react';
import AppointmentHeader from './AppointmentHeader';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className='bg-stone-100'>
            <div><AppointmentHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentHeader></div>
            <div><AvailableAppointments selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AvailableAppointments></div>
        </div>
    );
};

export default Appointment;