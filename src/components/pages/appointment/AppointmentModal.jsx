import React from 'react';
import { format } from 'date-fns';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const AppointmentModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name: treatmentName, slots, price } = treatment
    const date = format(selectedDate, 'PP');

    const handleAppointmentSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        console.log(name, email, slot, phone)

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        console.log(booking);

        fetch('https://doctor-portal-server-eight-kappa.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    refetch();
                    toast.success('Booking Successful!')
                }
                else {
                    toast.error(data.message)
                }
            })

    }

    return (
        <div className=''>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-xl font-bold'>{treatmentName}</h3>
                    <form onSubmit={handleAppointmentSubmit} className='grid grid-cols-1 gap-3 pt-10'>
                        <input type="text" name='date' value={date} className="w-full bg-slate-300 font-semibold py-3 px-4 rounded-md" disabled />

                        <select name='slot' className="select w-full border-secondary" required>
                            <option value={''}>Select Your Date!</option>
                            {
                                slots?.map((slot, idx) => <option key={idx} defaultValue={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input w-full border-secondary" required />
                        <input type="email" name='email' defaultValue={user?.email} readOnly disabled placeholder="Your Email" className="input w-full border-secondary" required />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full border-secondary" required />
                        {/* <button htmlFor="my-modal-3" className='btn linear-gradient text-white font-bold w-full' type="submit">Submit</button> */}
                        <button type="submit"><label htmlFor="my-modal-3" className='btn linear-gradient text-white font-bold w-full'>Submit</label></button>
                    </form>
                </div>
            </div>
            <Toaster position="bottom-right"
                reverseOrder={false}></Toaster>
        </div>
    );
};

export default AppointmentModal;