import { ReactNode } from "react";
import { TagsGroupContainer }  from "./TagsGroup.styles"

interface TagsGroupProps {
    children: ReactNode;
}

export default function TagsGroup({children}:TagsGroupProps){
    return <TagsGroupContainer>{children}</TagsGroupContainer>
}