import { ButtonContainer } from "./Button.styles"
import { ReactNode } from "react"

interface ButtonProps {
    icon: ReactNode;  
    handleCartClick: (event: React.MouseEvent<HTMLButtonElement>) => void   
}
export default function Button({icon, handleCartClick}:ButtonProps){

    return <ButtonContainer onClick={handleCartClick}>{icon}</ButtonContainer>
}