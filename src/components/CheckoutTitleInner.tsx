import { ReactNode } from "react"
import { CheckoutTitleInnerSComp } from "./CheckoutTitleInner.styles";

interface CheckoutTitleInnerProps {
    children: ReactNode;
}
export default function CheckoutTitleInner({ children }: Readonly<CheckoutTitleInnerProps>) {
    return <CheckoutTitleInnerSComp>{children}</CheckoutTitleInnerSComp>
}