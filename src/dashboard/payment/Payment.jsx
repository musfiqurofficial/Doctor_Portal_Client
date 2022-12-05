import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51MBFPyAJ2iDBUUuTHR2t5XlE5Dv9GBvfv1JQLU9G09HGiDWxn0Fya9idmCNu6aaVtEljGtc56beX7HiLSZ65xaZc00a1mPIO99');

const Payment = () => {
    const booking = useLoaderData();
    return (
        <div>
            <div className="w-11/12 mx-auto my-8 overflow-x-auto">
                <h1 className="text-3xl font-semibold mb-5">Payment for {booking.treatment}</h1>
                <p>Please pay: <strong>${booking?.price}</strong></p>

                <div className='w-96 my-16'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking}
                        />
                    </Elements>
                </div>
            </div>
            <Toaster position="bottom-right"
                reverseOrder={false}>
            </Toaster>
        </div>
    );
};

export default Payment;