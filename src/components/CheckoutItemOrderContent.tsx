import { ReactNode } from "react";
import { CheckoutItemOrderContentContainer } from "./CheckoutItemOrder.styles";


interface CheckoutItemOrderContentProps {
    children: ReactNode;
}

export default function CheckoutItemOrderContent({ children }: Readonly<CheckoutItemOrderContentProps>) {
    return <CheckoutItemOrderContentContainer>{children}</CheckoutItemOrderContentContainer>
}