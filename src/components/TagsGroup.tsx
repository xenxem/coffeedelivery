import { ReactNode } from "react";
import { TagsGroupContainer } from "./TagsGroup.styles"

interface TagsGroupProps {
    children: ReactNode;
}

export default function TagsGroup({ children }: Readonly<TagsGroupProps>) {
    return <TagsGroupContainer>{children}</TagsGroupContainer>
}