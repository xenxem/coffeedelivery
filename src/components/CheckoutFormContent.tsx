import { ReactNode } from "react"
import { CheckoutFormContentSComp } from "./CheckoutFormContent.styles"

interface CheckoutFormProps {
    children: ReactNode;
    id?: string;
}

export default function CheckoutFormContent({ children, id }: Readonly<CheckoutFormProps>) {
    return <CheckoutFormContentSComp id={id}>{children}</CheckoutFormContentSComp>
}