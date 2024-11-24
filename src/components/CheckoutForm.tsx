import { ReactNode } from "react"
import { CheckoutFormSComp } from "./CheckoutForm.styles"

interface CheckoutFormProps {
    children: ReactNode;
}

export default function CheckoutForm({ children }: Readonly<CheckoutFormProps>) {
    return <CheckoutFormSComp>{children}</CheckoutFormSComp>
}