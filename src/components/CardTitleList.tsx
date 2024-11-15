import { ReactNode } from "react";
import { CardTitleListContainer } from "./CardTitleList.styles";

interface CardTitleListProps {
  children: ReactNode;
}

export default function CardTitleList({children}:CardTitleListProps) {
  return <CardTitleListContainer>{children}</CardTitleListContainer>;
}
