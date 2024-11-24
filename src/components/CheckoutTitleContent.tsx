import { ReactNode } from "react";
import { CheckoutTitleContentSComp } from "./CheckoutTitleContent.styles";

interface CheckoutTitleContentProps {
    children: ReactNode;
}

export default function CheckoutTitleContent({ children }: Readonly<CheckoutTitleContentProps>) {
    return <CheckoutTitleContentSComp>{children}</CheckoutTitleContentSComp>
}