import { CoffeeDescriptionContainer } from "./CoffeeDescription.styles";

interface CoffeeDescriptionProps {
    subtitle:string;
}

export default function CoffeeDescription({subtitle}: CoffeeDescriptionProps){
    return <CoffeeDescriptionContainer>{subtitle}</CoffeeDescriptionContainer>
}