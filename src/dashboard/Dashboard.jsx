import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-server-eight-kappa.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className=''>
            <div className="w-11/12 mx-auto my-8 overflow-x-auto">
                <h1 className="text-3xl font-bold mb-5">My Appointment</h1>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, idx) => <tr key={booking._id}>
                                <th>{idx + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.slot}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='px-5 py-2 bg-primary rounded-md'>PAY</button></Link>
                                    }
                                    {
                                        booking.price && booking.paid && <button className='px-5 py-2 bg-gray-500 text-white rounded-md' disabled>Paid</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;