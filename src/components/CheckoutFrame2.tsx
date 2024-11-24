import { ReactNode } from "react"
import { CheckoutFrame2SComp } from "./CheckoutFrame2.styles";

interface CheckoutFrame1Props {
    children: ReactNode;
}

export default function CheckoutFrame2({ children }: Readonly<CheckoutFrame1Props>) {
    return <CheckoutFrame2SComp> {children} </CheckoutFrame2SComp>
}