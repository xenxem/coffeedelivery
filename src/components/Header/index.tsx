import ActionCart from "../ActionCart"
import Button from "../Button"
import Position from "./Position"
import { HeaderContainer } from "./Header.styles"
import {ShoppingCart} from 'phosphor-react'
import CountCart from "./CountCart"
import { useContext } from "react"
import { CoffeesContext } from "../../Contexts/CoffeesContext"
export default function Header(){

    const handleCartClick = () => {
        alert('manda para o checkout...')
    }

    const coffeesContext = useContext(CoffeesContext);

    const {totalAmount} = coffeesContext;
    
    return(
        <nav>              
            <HeaderContainer>
                <img src="Logo.svg" />                 
                <ActionCart>    
                    <Position />  
                    <Button title={'Total de produtos'} handleCartClick={handleCartClick} icon={<ShoppingCart color="#C47F17" size={22} weight="fill" />} />
                    <CountCart count={totalAmount} />
                </ActionCart>
            </HeaderContainer>                          
        </nav>
    )
}