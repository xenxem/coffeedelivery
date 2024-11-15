import { ReactNode } from "react";
import { TagContainer } from "./Tag.styles";


interface TagProps {
    children: ReactNode;
}

export default function Tag({ children }: Readonly<TagProps>) {
    return <TagContainer>{children}</TagContainer>
}