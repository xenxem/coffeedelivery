import { ReactNode } from "react";
import { CheckoutContentSComp } from "./CheckoutContent.styles";

interface CheckoutContentProps {
    children: ReactNode;
    height?: string;
}

export default function CheckoutContent({ children, height }: Readonly<CheckoutContentProps>) {
    return <CheckoutContentSComp height={height}>{children}</CheckoutContentSComp>
}