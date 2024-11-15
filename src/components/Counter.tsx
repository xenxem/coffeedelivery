import { CounterContainer } from "./Counter.styles";


interface CounterProps {
    children: React.ReactNode;
}

export default function Counter({ children }: Readonly<CounterProps>) {
    return <CounterContainer>{children}</CounterContainer>
}