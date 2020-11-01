import React from "react";
import { observer } from "mobx-react-lite";
import { Item } from "../store/ItemModel";

interface Props {
  title: string;
  items: Item[];
}

export const Title: React.FC<Props> = observer(({ title, items }: Props) => {
  return (
    <h2>
      {title} ({items.length})
    </h2>
  );
});
