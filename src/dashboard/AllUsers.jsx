import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ConfirmationModal from '../components/common/confirmModal/ConfirmationModal';

const AllUsers = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-server-eight-kappa.vercel.app/allUsers');
            const data = await res.json();
            return data;
        }
    })

    const handleUpdate = (id) => {
        fetch(`https://doctor-portal-server-eight-kappa.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully admin created!')
                    refetch();
                }
            })
    }

    const handleUserDeleting = user => {
        fetch(`https://doctor-portal-server-eight-kappa.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`${user.name} Successfully Delete!`)
            })
    }

    return (
        <div>
            <div className="w-11/12 mx-auto my-8 overflow-x-auto">
                <h1 className="text-3xl font-bold mb-5">All Users Appointment</h1>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleUpdate(user._id)} className='btn btn-secondary text-white'>Admin</button>}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(user)} htmlFor="deleteID" className='rounded-md text-red-600 hover:text-red-900 flex items-center'>
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
            {deletingDoctor && <ConfirmationModal
                title={`Are you sure you want to delete!`}
                message={`Are you sure you want to delete ${deletingDoctor.name} All of your data will be permanently removed. This action cannot be undone.`}
                handleUserDeleting={handleUserDeleting}
                user={deletingDoctor}
            ></ConfirmationModal>}
            <Toaster position="bottom-right"
                reverseOrder={false}></Toaster>

        </div>
    );
};

export default AllUsers;