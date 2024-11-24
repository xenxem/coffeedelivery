

import { InputTextSComp } from "./InputText.styles";

interface InputTextProps {
    type: string;
    placeholder: string;
    width: string;
}

export default function InputText({ type, placeholder, width }: Readonly<InputTextProps>) {
    return <InputTextSComp type={type} placeholder={placeholder} width={width} />
}