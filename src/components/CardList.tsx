import { ReactNode } from "react";
import { CardListContainer } from "./CardList.styles"

interface CardListProps {
  children: ReactNode;
}

export default function CardList({children}:CardListProps) {
  return <CardListContainer>{children}</CardListContainer>;
}
