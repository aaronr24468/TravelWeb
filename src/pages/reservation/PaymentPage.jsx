import CheckoutForm from "../../components/paymentElement"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(`pk_live_51Su0EaJ5GdgFUR9puQrRC2UVuYiI96gCE4aEToEx8ozMYG6DUU9vVasjSEWMSzacg4hqwge9oSPZoe4xXRxmhJSP00nQiidD3G`);

export const PaymentPage = ({ clientSecret, setError }) => {
    // hacemos una condicion en la que le decimos que si clientSecret es tiene algo y el Elements tiene algo en clienSecret nos muestra la pagina mientras no crea nada
    // dado a que el clientSecret de options de Elements siempre es null hasta que le mandamos el dato de nuestro backEnd

    console.log(clientSecret)
    return (
        <>
            {clientSecret && (<Elements stripe={stripePromise} options={{ clientSecret }}> 
                <CheckoutForm setError={setError}/>
            </Elements>)}
        </>

    )
}