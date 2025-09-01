import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCarts from "../../hooks/useCarts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState();

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCarts();
    const totalAllPrice = cart.reduce((total, item) => total + item.price, 0)
    const totalPrice = parseFloat(totalAllPrice.toFixed(3));

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('object');

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            })
        if (confirmError) {
            console.log('confirm Error');
        }
        else {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('payment Id', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // now save the payment in database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(),
                    transactionId: paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log(res.data);
                refetch()
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank You For Your Payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }
            }
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center items-center ml-20">
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
                <button className="btn btn-primary m-10" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-3xl text-red-500">{error}</p>
                {transactionId && <p className="text-green-500 text-2xl text-center">Your TransactionId is: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckOutForm;