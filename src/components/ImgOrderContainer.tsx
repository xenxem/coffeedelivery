import { ReactNode } from "react";
import { ImgOrderContainerStyled } from "./ConfirmedOrder.styled";

interface ImgOrderContainerProps {
    children: ReactNode;
    variant?: string;
}

export default function ImgOrderContainer({ children, variant }: Readonly<ImgOrderContainerProps>) {
    return <ImgOrderContainerStyled variant={variant}>{children}</ImgOrderContainerStyled>
}