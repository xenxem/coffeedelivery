import ActionCart from "../ActionCart"
import Button from "../Button"
import Position from "./Position"
import { HeaderContainer } from "./Header.styles"

import CountCart from "./CountCart"
import { useContext } from "react"
import { CoffeesContext } from "../../Contexts/CoffeesContext"
import { useLocation, useNavigate } from "react-router-dom"


export default function Header() {

    const navigate = useNavigate();
    const handleCartClick =
        () => {
            navigate("/checkout");
        }

    const coffeesContext = useContext(CoffeesContext);

    const { totalAmount } = coffeesContext;

    const location = useLocation();


    return (
        <nav>
            <HeaderContainer>
                <img src="Logo.svg" alt="" />
                <ActionCart>
                    <Position />
                    <Button title={'Total de produtos'} handleCartClick={handleCartClick} />
                    <CountCart count={location.pathname == "/confirmedorder" ? 0 : totalAmount} />
                </ActionCart>
            </HeaderContainer>
        </nav>
    )
}