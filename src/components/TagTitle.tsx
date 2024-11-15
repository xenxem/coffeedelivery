import { TagTitleContainer } from "./TagTitle.styles";

interface TagTitleProps{
    title: string;
}

export default function TagTitle({title}:TagTitleProps){
    return <TagTitleContainer>{title}</TagTitleContainer>
}