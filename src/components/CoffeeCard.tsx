import { ReactNode } from "react";
import { CoffeeCardContainer } from "./CoffeeCard.styles";

interface CoffeeCardProps {
    children: ReactNode;
}

export default function CoffeeCard({children}: CoffeeCardProps){
    return <CoffeeCardContainer>{children}</CoffeeCardContainer>
}
