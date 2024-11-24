import { ReactNode } from "react"
import { CheckoutContainerSComp } from "./CheckoutContainer.styles"

interface CheckoutContainerProps {
    children: ReactNode;
}

export default function CheckoutContainer({ children }: Readonly<CheckoutContainerProps>) {
    return <CheckoutContainerSComp>{children}</CheckoutContainerSComp>

}