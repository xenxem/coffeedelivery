import { CoffeeDescriptionContainer } from "./CoffeeDescription.styles";

interface CoffeeDescriptionProps {
    subtitle: string;
}

export default function CoffeeDescription({ subtitle }: Readonly<CoffeeDescriptionProps>) {
    return <CoffeeDescriptionContainer>{subtitle}</CoffeeDescriptionContainer>
}