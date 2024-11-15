import ActionCart from "./ActionCart"
import Button from "../Button"
import Position from "./Position"
import { HeaderContainer } from "./Header.styles"
import {ShoppingCart} from 'phosphor-react'
import CountCart from "./CountCart"
export default function Header(){

    const handleCartClick = () => {
        alert('manda para o checkout...')
    }

    return(
        <nav>              
            <HeaderContainer>
                <img src="Logo.svg" />                 
                <ActionCart>    
                    <Position />  
                    <Button handleCartClick={handleCartClick} icon={<ShoppingCart color="#C47F17" size={22} weight="fill" />} />
                    <CountCart />
                </ActionCart>
            </HeaderContainer>                          
        </nav>
    )
}