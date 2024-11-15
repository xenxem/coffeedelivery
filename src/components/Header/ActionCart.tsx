import { ReactNode } from "react";
import { AcationCartContainer } from "./ActionCart.styles";


interface ActionProps{
    children: ReactNode;
    space?: string;
}


export default function ActionCart({ children, space }: ActionProps){
    return <AcationCartContainer space={space}>{children} </AcationCartContainer>
}