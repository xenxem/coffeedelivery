import { ReactNode } from "react";
import { CheckoutItemOrderContainer } from "./CheckoutItemOrder.styles";

interface CheckoutItemOrderProps {
    children: ReactNode;
}

export default function CheckoutItemOrder({ children }: Readonly<CheckoutItemOrderProps>) {
    return <CheckoutItemOrderContainer>{children}</CheckoutItemOrderContainer>
}