import { TagTitleContainer } from "./TagTitle.styles";

interface TagTitleProps {
    title: string;
}

export default function TagTitle({ title }: Readonly<TagTitleProps>) {
    return <TagTitleContainer>{title}</TagTitleContainer>
}