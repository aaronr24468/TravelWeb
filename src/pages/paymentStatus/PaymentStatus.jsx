
import './PaymentStatus.css';
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from 'react-router';

const stripePromise = loadStripe('pk_test_51Su0F1J0IEihRdiGXGM08V3ik3VGuJjaJ6Gk7vRPfePnrkBrhDPZFjIG4wpd6hDMifWRvQk693WjLwWzHQ4k1rSx00JmyjFHfY');

export const PaymentStatus = ({ }) => {
    const navigate = useNavigate();

    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const clientSecret = new URLSearchParams(
            window.location.search
        ).get('payment_intent_client_secret');

        if (!clientSecret) return;

        stripePromise.then((stripe) => {
            stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
                setStatus(paymentIntent.status)
            })
        })

        setTimeout(() => {
            navigate("/move&go")
        }, 3000)
    }, [])




    return (
        <>
            <main className='statusPayment'>
                {status === "loading" && <p className='verifyPayment'>Verificando pago...</p>}
                {status === "succeeded" && <p className='succeeded'>✅ Pago exitoso</p>}
                {status === "processing" && <p className='process'>⏳ Pago en proceso</p>}
                {status === "requires_payment_method" && <p className='declined'>❌ El pago no se completo</p>}
            </main>

        </>
    )
}