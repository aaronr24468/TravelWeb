import CheckoutForm from "../../components/paymentElement"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"


const stripePromise = loadStripe('pk_test_51Su0F1J0IEihRdiGXGM08V3ik3VGuJjaJ6Gk7vRPfePnrkBrhDPZFjIG4wpd6hDMifWRvQk693WjLwWzHQ4k1rSx00JmyjFHfY');

export const PaymentPage = ({ clientSecret }) => {
    // hacemos una condicion en la que le decimos que si clientSecret es tiene algo y el Elements tiene algo en clienSecret nos muestra la pagina mientras no crea nada
    // dado a que el clientSecret de options de Elements siempre es null hasta que le mandamos el dato de nuestro backEnd
    return (
        <>
            {clientSecret && (<Elements stripe={stripePromise} options={{ clientSecret }}> 
                <CheckoutForm />
            </Elements>)}
        </>

    )
}