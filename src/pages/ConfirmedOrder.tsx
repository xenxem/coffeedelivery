import { ConfirmedOrderFrameStyled, ConfirmedOrderSubTitleStyled, ConfirmedOrderTitleStyled } from "../components/ConfirmedOrder.styled";

export default function ConfirmedOrder() {
    return (

        <div>
            <ConfirmedOrderTitleStyled>Uhu! Pedido confirmado</ConfirmedOrderTitleStyled>
            <ConfirmedOrderSubTitleStyled>Agora é só aguardar que logo o café chegará até você</ConfirmedOrderSubTitleStyled>
            <ConfirmedOrderFrameStyled>
                <div>texto1</div>
                <div>texto2</div>
                <div>texto1</div>
            </ConfirmedOrderFrameStyled>
        </div>
    )
}