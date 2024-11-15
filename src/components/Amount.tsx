import { AmountContainer } from "./Amount.styles";

interface AmountProps {
    value:number;
}

export default function Amount({value}:AmountProps){
    return <AmountContainer>{value}</AmountContainer>
}