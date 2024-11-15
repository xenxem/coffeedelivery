import { ReactNode } from "react";
import { CardTitleListContainer } from "./CardTitleList.styles";

interface CardTitleListProps {
  children: ReactNode;
}

export default function CardTitleList({ children }: Readonly<CardTitleListProps>) {
  return <CardTitleListContainer>{children}</CardTitleListContainer>;
}
