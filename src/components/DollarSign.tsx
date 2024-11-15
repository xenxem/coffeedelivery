import { DollarSignContainer } from "./DollarSign.styles";

interface DollarSignProps {
    cifrao: string;
}

export default function DollarSign({ cifrao }: Readonly<DollarSignProps>) {
    return <DollarSignContainer>{cifrao} </DollarSignContainer>
}