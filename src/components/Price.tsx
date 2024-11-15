import { PriceContainer } from "./Price.styles";
interface PriceProps {
    value: string;
}

export default function Price({ value }: Readonly<PriceProps>) {
    return <PriceContainer>{value}</PriceContainer>
}