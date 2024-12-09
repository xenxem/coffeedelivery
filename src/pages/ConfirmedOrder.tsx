
import { useContext } from "react";
import { ConfirmedContentStyled, ConfirmedOrderFrameStyled, ConfirmedOrderSubTitleStyled, ConfirmedOrderTitleStyled } from "../components/ConfirmedOrder.styled";
import ImageOrder from "../components/ImageOrder";
import { CoffeesContext } from "../Contexts/CoffeesContext";



export default function ConfirmedOrder() {


    const contextCoffee = useContext(CoffeesContext);
    const { address } = contextCoffee;


    return (

        <div>
            <ConfirmedOrderTitleStyled>Uhu! Pedido confirmado</ConfirmedOrderTitleStyled>
            <ConfirmedOrderSubTitleStyled>Agora é só aguardar que logo o café chegará até você</ConfirmedOrderSubTitleStyled>
            <ConfirmedContentStyled>
                <ConfirmedOrderFrameStyled>
                    <div>
                        {
                            `Entrega na ${address.logradouro}, ${address.numero}
                        ${address.bairro} - ${address.localidade}, ${address.uf}
                        `
                        }
                    </div>
                    <div>Previsão de entrega</div>
                    <div>Pagamento na entrega</div>
                </ConfirmedOrderFrameStyled>
                <ImageOrder />
            </ConfirmedContentStyled>
        </div>

    )
}