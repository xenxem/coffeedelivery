import { ReactNode } from "react";
import { CheckoutTitleInnerTextSComp } from "./CheckoutTitleInnerText.styles";

interface CheckoutTitleInnerTextProps {
    children: ReactNode;
}

export default function CheckoutTitleInnerText({ children }: Readonly<CheckoutTitleInnerTextProps>) {
    return <CheckoutTitleInnerTextSComp>{children}</CheckoutTitleInnerTextSComp>
}