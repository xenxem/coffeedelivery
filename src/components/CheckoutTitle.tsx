import { ReactNode } from "react";
import { CheckoutTitleSComp } from "./CheckoutTitle.styles";

interface CheckoutTitleProps {
    children: ReactNode;
}

export default function CheckoutTitle({ children }: Readonly<CheckoutTitleProps>) {
    return <CheckoutTitleSComp>{children}</CheckoutTitleSComp>
}