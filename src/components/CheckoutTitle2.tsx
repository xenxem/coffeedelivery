import { ReactNode } from "react";
import { CheckoutTitle2SComp } from "./CheckoutTitle2.styles";

interface CheckoutTitleProps {
    children: ReactNode;
}

export default function CheckoutTitle2({ children }: Readonly<CheckoutTitleProps>) {
    return <CheckoutTitle2SComp>{children}</CheckoutTitle2SComp>
}