import { ReactNode } from "react";
import { ActionCartContainer } from "./ActionCart.styles";


interface ActionProps {
    children: ReactNode;
    space?: string;
}


export default function ActionCart({ children, space }: Readonly<ActionProps>) {
    return <ActionCartContainer space={space}>{children} </ActionCartContainer>
}