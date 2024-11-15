import { CounterContainer } from "./Counter.styles";


interface CounterProps {
    children: React.ReactNode;
}

export default function Counter({children}:CounterProps){
    return <CounterContainer>{children}</CounterContainer> 
}