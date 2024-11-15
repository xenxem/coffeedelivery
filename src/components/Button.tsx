import { ButtonContainer } from "./Button.styles"
import { ReactNode } from "react"

interface ButtonProps {
    icon: ReactNode;
    handleCartClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    title: string;
}
export default function Button({ icon, title, handleCartClick }: Readonly<ButtonProps>) {



    return <ButtonContainer title={title} onClick={handleCartClick}>{icon}</ButtonContainer>
}