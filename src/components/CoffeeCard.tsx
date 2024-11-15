import { ReactNode } from "react";
import { CoffeeCardContainer } from "./CoffeeCard.styles";

interface CoffeeCardProps {
    children: ReactNode;
}

export default function CoffeeCard({ children }: Readonly<CoffeeCardProps>) {
    return <CoffeeCardContainer>{children}</CoffeeCardContainer>
}
