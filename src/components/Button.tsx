import { ShoppingCart, Trash } from "phosphor-react";
import { ButtonContainer, TrashButtonContainer } from "./Button.styles"


interface ButtonProps {
    handleCartClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    title: string;
}
export default function Button({ title, handleCartClick }: Readonly<ButtonProps>) {
    return <ButtonContainer title={title} onClick={handleCartClick}><ShoppingCart color="#4B2995" size={22} weight="fill" /></ButtonContainer>
}


export const TrashButton = ({ title, handleCartClick }: Readonly<ButtonProps>) => {
    return <TrashButtonContainer title={title} onClick={handleCartClick}><Trash color="#8047F8" size={22} /> <span>remover</span></TrashButtonContainer >
}