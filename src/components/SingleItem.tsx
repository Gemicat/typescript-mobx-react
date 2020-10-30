import * as React from "react";
import { Item } from "../store/ItemModel";

interface Props {
  item: Item;
}

const SingleItem: React.FC<Props> = ({ item }) => {
  console.log(item);
  const onRemove = () => {
    item.remove();
  };
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
      <button className="Item-remove" onClick={onRemove}>
        Remove
      </button>
    </article>
  );
};

export default SingleItem;
