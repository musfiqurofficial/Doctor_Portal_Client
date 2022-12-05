import React from 'react';

const AppointmentCard = ({ appointment, setTreatment }) => {
    const { name, price, slots } = appointment;
    return (
        <div className="card shadow-sm hover:shadow-lg bg-slate-50 py-5">
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <div className='my-3'>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <p>Price: ${price}</p>
                </div>
                <div className="card-actions justify-end">
                    {slots.length > 0 ?
                        <label onClick={() => setTreatment(appointment)} htmlFor="my-modal-3" className="btn btn-primary uppercase linear-gradient">Book Appointment
                        </label>
                        :
                        <input type="text" name='date' value="Book Appointment" className="bg-slate-300 font-semibold py-3 text-center rounded-md" disabled />}
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;