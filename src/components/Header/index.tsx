import ActionCart from "../ActionCart"
import Button from "../Button"
import Position from "./Position"
import { HeaderContainer } from "./Header.styles"
import { ShoppingCart } from 'phosphor-react'
import CountCart from "./CountCart"
import { useContext } from "react"
import { CoffeesContext } from "../../Contexts/CoffeesContext"
import { useNavigate } from "react-router-dom"


export default function Header() {
    const navigate = useNavigate();
    const handleCartClick = () => {
        navigate("/checkout");
    }

    const coffeesContext = useContext(CoffeesContext);

    const { totalAmount } = coffeesContext;

    return (
        <nav>
            <HeaderContainer>
                <img src="Logo.svg" alt="" />
                <ActionCart>
                    <Position />
                    <Button title={'Total de produtos'} handleCartClick={handleCartClick} />
                    <CountCart count={totalAmount} />
                </ActionCart>
            </HeaderContainer>
        </nav>
    )
}