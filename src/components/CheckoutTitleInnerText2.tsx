import { ReactNode } from "react";
import { CheckoutTitleInnerText2SComp } from "./CheckoutTitleInnerText2.styles";

interface CheckoutTitleInnerText2SCompProps {
    children: ReactNode;
}

export default function CheckoutTitleInnerText2({ children }: Readonly<CheckoutTitleInnerText2SCompProps>) {
    return <CheckoutTitleInnerText2SComp>{children}</CheckoutTitleInnerText2SComp>
}