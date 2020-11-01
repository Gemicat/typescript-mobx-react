import { observer } from "mobx-react-lite";
import * as React from "react";
import { Item } from "../store/ItemModel";

interface Props {
  item: Item;
}

const SingleItem: React.FC<Props> = observer(({ item }: Props) => {
  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={item.toggle}
          id={item.id}
        />
        {item.value}
      </label>
      <button className="Item-remove" onClick={item.remove}>
        Remove
      </button>
    </article>
  );
});

export default SingleItem;
