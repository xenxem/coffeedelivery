import { ReactNode } from "react";
import { IncrementCounterContainer } from "./Counter.styles";

interface IncrementCounterProps {
    icon:ReactNode;
    handleIncrement:()=> void;
   
}


export default function IncrementCounter({icon, handleIncrement}:IncrementCounterProps){
    return <IncrementCounterContainer onClick={handleIncrement}>{icon}</IncrementCounterContainer>
}