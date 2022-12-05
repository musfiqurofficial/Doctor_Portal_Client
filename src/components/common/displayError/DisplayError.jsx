import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div className='w-5/12 mx-auto my-44 text-gray-600 text-center'>
            <h1 className='text-9xl font-bold'>404</h1>
            <h3 className='text-2xl font-bold my-3'>Not Found</h3>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <Link to='/' className="btn text-base-100 linear-gradient border-none hover:bg-secondary hover:border-none mt-3">Back To Home Page</Link>
        </div>
    );
};

export default DisplayError;