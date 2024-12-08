import { ReactNode } from "react";
import { CheckoutItemOrderContentActionContainer } from "./CheckoutItemOrderContentAction.styles";

interface CheckoutItemOrderContentActionProps {
    children: ReactNode;
}


export default function CheckoutItemOrderContentAction({ children }: Readonly<CheckoutItemOrderContentActionProps>) {
    return <CheckoutItemOrderContentActionContainer>{children}</CheckoutItemOrderContentActionContainer>
}