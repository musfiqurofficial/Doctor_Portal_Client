import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionsId, setTransactionsId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [navigateHome, setNavigateHome] = useState(false)

    const stripe = useStripe();
    const elements = useElements();
    const { price, email, patient, _id } = booking;

    useEffect(() => {
        fetch("https://doctor-portal-server-eight-kappa.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error);
        } else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        setNavigateHome(false)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,

                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                email,
                price,
                transactionsId: paymentIntent.id,
                bookingId: _id,
            }
            fetch('https://doctor-portal-server-eight-kappa.vercel.app/payments', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! Your payment done.');
                        setTransactionsId(paymentIntent.id);
                        setNavigateHome(true)
                    }
                })
        }
        setProcessing(false)
        console.log(paymentIntent)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='bg-secondary px-6 py-2 text-white rounded-md font-semibold hover:bg-gray-700 mt-5' disabled={!stripe || !clientSecret || processing}>
                    PAY
                </button>
            </form>
            <p className='text-red-600 mt-5'>{cardError.message}</p>
            {
                success && <div>
                    <p className='text-green-600'>{success}</p>
                    <p>Your Transaction Id: <span className='text-green-600 font-semibold'>{transactionsId}</span></p>
                </div>
            }
            {
                navigateHome === true && <Link to='/dashboard'>Go to</Link>
            }
        </>
    );
};

export default CheckoutForm;