import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ItemsContainer: React.FC<Props> = ({ children }: Props) => {
  return <section className="Items">{children}</section>;
};
