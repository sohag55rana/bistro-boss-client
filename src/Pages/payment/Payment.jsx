import { loadStripe } from "@stripe/stripe-js";
import SectionTitile from "../../components/SectionTitile";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const Payment = () => {

    // Todo: add publisable key
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
    return (
        <div>
            <SectionTitile heading="Payment" subheading="Payment and Eating Here"></SectionTitile>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;