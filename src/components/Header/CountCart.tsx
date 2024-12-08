import { CountCartContainer } from "./CountCart.styles";


interface CountCartProps {
    count: number;
}

export default function CountCart({ count }: CountCartProps) {

    return count > 0 ? (<CountCartContainer>{count}</CountCartContainer>) : ""
}
