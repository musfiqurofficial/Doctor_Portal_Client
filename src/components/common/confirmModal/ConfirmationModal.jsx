import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function ConfirmationModal({ title, message, doctor, user, handleUserDeleting, handleDoctorDeleting }) {

    return (
        <div>
            <input type="checkbox" id="deleteID" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="deleteID" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    {title}
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">{message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                        {user && <label
                            // onClick={() => handleDoctorDeleting(doctor)}
                            onClick={() => handleUserDeleting(user)}
                            htmlFor="deleteID"
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"

                        >
                            Deleting
                        </label>}

                        {doctor && <label
                            onClick={() => handleDoctorDeleting(doctor)}
                            // onClick={() => handleUserDeleting(user)}
                            htmlFor="deleteID"
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"

                        >
                            Deleting
                        </label>}
                        <label
                            htmlFor="deleteID"
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
