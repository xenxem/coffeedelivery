import { AmountContainer } from "./Amount.styles";

interface AmountProps {
    value: number;
}

export default function Amount({ value }: Readonly<AmountProps>) {
    return <AmountContainer>{value}</AmountContainer>
}