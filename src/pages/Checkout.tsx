import CheckoutContainer from "../components/CheckoutContainer";
import CheckoutContent from "../components/CheckoutContent";
import CheckoutFrame1 from "../components/CheckoutFrame1";
import CheckoutFrame2 from "../components/CheckoutFrame2";
import CheckoutTitle from "../components/CheckoutTitle";
import CheckoutTitle2 from "../components/CheckoutTitle2";
import CheckoutTitleContent from "../components/CheckoutTitleContent";
import CheckoutTitleInner from "../components/CheckoutTitleInner";
import { MapPin } from 'phosphor-react';
import CheckoutTitleInnerText from "../components/CheckoutTitleInnerText";
import CheckoutTitleInnerText2 from "../components/CheckoutTitleInnerText2";
import CheckoutForm from "../components/CheckoutForm";
import InputText from "../components/InputText";
import InputContainer from "../components/InputContainer";
import OptionalContainer from "../components/OptionalContainer";

export default function Checkout() {
    return (

        <CheckoutContainer>
            <CheckoutTitle>Complete seu pedido</CheckoutTitle>
            <CheckoutTitle2>Cafés selecionados</CheckoutTitle2>
            <CheckoutFrame1>
                <CheckoutContent>
                    <CheckoutTitleContent>
                        <MapPin size={22} color="#C47F17" />
                        <CheckoutTitleInner>
                            <CheckoutTitleInnerText>Endereço de Entrega</CheckoutTitleInnerText>
                            <CheckoutTitleInnerText2>Informe o endereço onde deseja receber seu pedido</CheckoutTitleInnerText2>
                        </CheckoutTitleInner>
                    </CheckoutTitleContent>
                    <CheckoutForm>
                        <InputText type="text" placeholder="CEP" width={'200px'} />
                        <InputText type="text" placeholder="Rua" width={'100%'} />
                        <InputContainer>
                            <InputText type="text" placeholder="Número" width={'200px'} />
                            <InputText type="text" placeholder="Complemento" width={'349px'} />
                            <OptionalContainer> Opcional</OptionalContainer>
                        </InputContainer>
                        <InputContainer>
                            <InputText type="text" placeholder="Bairro" width={'200px'} />
                            <InputText type="text" placeholder="Cidade" width={'276px'} />
                            <InputText type="text" placeholder="UF" width={'60px'} />
                        </InputContainer>
                    </CheckoutForm>
                </CheckoutContent>

                <CheckoutContent height={'207px'}>
                    <CheckoutTitleContent>
                        <MapPin size={22} color="#C47F17" />
                        <CheckoutTitleInner>
                            <CheckoutTitleInnerText>Pagamento</CheckoutTitleInnerText>
                            <CheckoutTitleInnerText2>O pagamento é feito na entrega. Escolha a forma que deseja pagar</CheckoutTitleInnerText2>
                        </CheckoutTitleInner>
                    </CheckoutTitleContent>
                    <CheckoutForm>
                        <InputContainer>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </InputContainer>
                    </CheckoutForm>
                </CheckoutContent>
            </CheckoutFrame1>
            <CheckoutFrame2>frame4</CheckoutFrame2>
        </CheckoutContainer>

    )
}