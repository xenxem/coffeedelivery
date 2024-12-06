import { ReactNode } from "react";
import { SubmitButtonContainer } from "./SubmitButton.styles";

interface SubmitButtonProps {
    children: ReactNode;
}


export default function SubmitButton({ children }: Readonly<SubmitButtonProps>) {
    return <SubmitButtonContainer type="submit" >{children}</SubmitButtonContainer>
}