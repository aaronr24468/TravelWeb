import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({setError}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:5173/move&go/paymentStatus/'
            },
            
        });

        console.log(result)

        if(result.error){ //aqui mostrar el mensaje de pago insuficiente o no se pudo hacer el pago
            console.log(result.error.message)
            if(result.error.code === "card_declined") setError("No cuentas con suficientes fondos");
        }else{
            console.log('pago procesado', result)
        }

    };

    return(
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button >Submit</button>
        </form>
    )
}


export default CheckoutForm;

