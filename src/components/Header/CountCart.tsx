import { useContext } from "react";
import { CoffeesContext } from "../../Contexts/CoffeesContext";
import { CountCartContainer } from "./CountCart.styles";

export default function CountCart(){

    const coffeesContext = useContext(CoffeesContext);

    const {coffees} = coffeesContext;

    let count = 0
    
    count = coffees.reduce((accumulator, coffee) => {
       return accumulator + coffee.amount; 
    },0);   
    
    return count > 0 ? (<CountCartContainer>{count}</CountCartContainer>): ""
}
