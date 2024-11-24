
import { ReactNode } from "react";
import { OptionalContainerSComp } from "./OptionalContaner.styles";

interface OptionalContainerProps {
    children: ReactNode;
}

export default function OptionalContainer({ children }: Readonly<OptionalContainerProps>) {
    return <OptionalContainerSComp>{children}</OptionalContainerSComp>
}