import { DollarSignContainer } from "./dollarSign.styles";

interface DollarSignProps {
    cifrao:string;
}

export default function DollarSign({cifrao}:DollarSignProps){
    return <DollarSignContainer>{cifrao} </DollarSignContainer>
}