import { ReactNode } from "react"
import { InputContainerSComp } from "./InputContainer.styles";

interface InputContainerProps {
    children: ReactNode;
}

export default function InputContainer({ children }: Readonly<InputContainerProps>) {
    return <InputContainerSComp>{children}</InputContainerSComp>
}