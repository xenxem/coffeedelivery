import { ReactNode } from "react"
import { CheckoutFrame1SComp } from "./CheckoutFrame1.styles";

interface CheckoutFrame1Props {
    children: ReactNode;
}

export default function CheckoutFrame1({ children }: Readonly<CheckoutFrame1Props>) {
    return <CheckoutFrame1SComp> {children} </CheckoutFrame1SComp>
}