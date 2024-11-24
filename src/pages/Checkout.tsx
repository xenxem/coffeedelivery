import CheckoutContainer from "../components/CheckoutContainer";
import CheckoutFrame1 from "../components/CheckoutFrame1";
import CheckoutFrame2 from "../components/CheckoutFrame2";
import CheckoutTitle from "../components/CheckoutTitle";
import CheckoutTitle2 from "../components/CheckoutTitle2";

export default function Checkout() {
    return (

        <CheckoutContainer>
            <CheckoutTitle>Complete seu pedido</CheckoutTitle>
            <CheckoutTitle2>Cafés selecionados</CheckoutTitle2>
            <CheckoutFrame1>frame3</CheckoutFrame1>
            <CheckoutFrame2>frame4</CheckoutFrame2>
        </CheckoutContainer>

    )
}