import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import AppointmentCard from './AppointmentCard';
import AppointmentModal from './AppointmentModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../common/loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState({});
    const date = format(selectedDate, 'PP');
    const { data: appointments = [], refetch, isLoading } = useQuery({
        queryKey: ['appointments', date],
        queryFn: () => fetch(`https://doctor-portal-server-eight-kappa.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='py-10'>
            <div className='w-10/12 mx-auto'>
                <h3 className='text-xl text-center text-secondary hover:text-primary font-bold mb-10'>Available Appointments on {format(selectedDate, 'PP')}</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        appointments.map(appointment => <AppointmentCard key={appointment._id} appointment={appointment} setTreatment={setTreatment}></AppointmentCard>)
                    }
                </div>
            </div>
            <div>
                <AppointmentModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment} refetch={refetch}></AppointmentModal>
            </div>
        </div>
    );
};

export default AvailableAppointments;