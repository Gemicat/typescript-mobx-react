import { observer } from "mobx-react-lite";
import React from "react";
import { Item } from "../store/ItemModel";
import SingleItem from "./SingleItem";

interface Props {
  items: Item[];
}

export const Items: React.FC<Props> = observer(({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
});
