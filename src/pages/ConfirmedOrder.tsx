
import { useContext } from "react";
import { AddressConfirmedContainerStyled, AddressConfirmedContentStyled, ConfirmedContentStyled, ConfirmedOrderFrameStyled, ConfirmedOrderSubTitleStyled, ConfirmedOrderTitleStyled, ImgOrderContainerStyled } from "../components/ConfirmedOrder.styled";
import ImageOrder from "../components/ImageOrder";
import { CoffeesContext } from "../Contexts/CoffeesContext";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";



export default function ConfirmedOrder() {


    const contextCoffee = useContext(CoffeesContext);
    const { address } = contextCoffee;


    return (

        <div>
            <ConfirmedOrderTitleStyled>Uhu! Pedido confirmado</ConfirmedOrderTitleStyled>
            <ConfirmedOrderSubTitleStyled>Agora é só aguardar que logo o café chegará até você</ConfirmedOrderSubTitleStyled>
            <ConfirmedContentStyled>
                <ConfirmedOrderFrameStyled>
                    <AddressConfirmedContainerStyled>
                        <ImgOrderContainerStyled><MapPin size={16} fill="white" /></ImgOrderContainerStyled>
                        <AddressConfirmedContentStyled>
                            Entrega na <strong>{address.logradouro}</strong>, {address.numero}
                            {address.bairro} - {address.localidade}, {address.uf}
                        </AddressConfirmedContentStyled>
                    </AddressConfirmedContainerStyled>
                    <AddressConfirmedContainerStyled>
                        <ImgOrderContainerStyled variant={'#DBAC2C'}><Timer size={16} fill="white" /></ImgOrderContainerStyled>
                        <AddressConfirmedContentStyled>
                            Previsão de entrega: <strong>20 min - 30 min</strong>
                        </AddressConfirmedContentStyled>
                    </AddressConfirmedContainerStyled>
                    <AddressConfirmedContainerStyled>
                        <ImgOrderContainerStyled variant={'#C47F17'}><CurrencyDollar size={16} fill="white" /></ImgOrderContainerStyled>
                        <AddressConfirmedContentStyled>
                            Pagamento na entrega:<strong> {address.pagamentoTipo} </strong>
                        </AddressConfirmedContentStyled>
                    </AddressConfirmedContainerStyled>
                </ConfirmedOrderFrameStyled>
                <ImageOrder />
            </ConfirmedContentStyled>
        </div>

    )
}