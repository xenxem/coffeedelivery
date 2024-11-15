import { CoffeeNameCotainer } from "./CoffeeName.styles";


interface CoffeeNameProps {
    title: string;
}

export default function CoffeeName({ title }: Readonly<CoffeeNameProps>) {
    return <CoffeeNameCotainer>{title}</CoffeeNameCotainer>
}