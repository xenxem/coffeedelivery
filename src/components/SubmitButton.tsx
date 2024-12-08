import { ReactNode } from "react";
import { SubmitButtonContainer } from "./SubmitButton.styles";

interface SubmitButtonProps {
    children: ReactNode;
    disabled: boolean;
}


export default function SubmitButton({ children, disabled }: Readonly<SubmitButtonProps>) {
    return <SubmitButtonContainer disabled={disabled} type="submit" >{children}</SubmitButtonContainer>
}