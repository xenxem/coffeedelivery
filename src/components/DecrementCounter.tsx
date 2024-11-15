
interface DecrementCountProps {
    icon:ReactNode;
    handleDecrement: () => void;
    disabled:boolean;
        
}

import { ReactNode } from "react";
import { DecrementCounterContainer } from "./Counter.styles";

export default function DecrementCounter({icon,disabled, handleDecrement}:DecrementCountProps){
    return <DecrementCounterContainer onClick={handleDecrement} disabled={disabled}>{icon}</DecrementCounterContainer> 
}