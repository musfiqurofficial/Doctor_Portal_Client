import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ConfirmationModal from '../components/common/confirmModal/ConfirmationModal';
import Loading from '../components/common/loading/Loading';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctor-portal-server-eight-kappa.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`

                    }
                })
                const data = await res.json();
                return data;
            } catch (error) {

            }
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDoctorDeleting = doctor => {
        fetch(`https://doctor-portal-server-eight-kappa.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`${doctor.name} Successfully Delete!`)
            })
    }
    return (
        <div>
            <div className="w-11/12 mx-auto my-8 overflow-x-auto">
                <h1 className="text-3xl font-bold mb-5">All Doctor</h1>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, idx) => <tr key={doctor._id}>
                                <th>{idx + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="deleteID" className='rounded-md text-red-600 hover:text-red-900 flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Toaster position="bottom-right"
                reverseOrder={false}></Toaster>
            {deletingDoctor && <ConfirmationModal
                title={`Are you sure you want to delete!`}
                message={`Are you sure you want to delete ${deletingDoctor.name} All of your data will be permanently removed. This action cannot be undone.`}
                handleDoctorDeleting={handleDoctorDeleting}
                doctor={deletingDoctor}
            ></ConfirmationModal>}

        </div>
    );
};

export default ManageDoctor;