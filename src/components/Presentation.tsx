import { ReactNode } from "react";
import { PresentationContainer } from "./Presentation.styles";

interface PresentationProps {
    children: ReactNode
}

export default function Presentation({ children }: Readonly<PresentationProps>) {
    return <PresentationContainer>{children}</PresentationContainer>
}