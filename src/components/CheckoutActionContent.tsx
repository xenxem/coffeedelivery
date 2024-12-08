import { ReactNode } from "react"
import { CheckoutActionContentContainer } from "./CheckoutActionContent.styles";


interface CheckoutActionContentProps {
    children: ReactNode;
}

export default function CheckoutActionContent({ children }: Readonly<CheckoutActionContentProps>) {
    return <CheckoutActionContentContainer>{children}</CheckoutActionContentContainer>
}