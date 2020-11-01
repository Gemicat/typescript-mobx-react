import * as React from "react";
import { observer } from "mobx-react-lite";
import SingleItem from "./SingleItem";
import Filter from "./Filter";
import { Item } from "../store/ItemModel";

interface Props {
  title: string;
  items: Item[];
}

const Items: React.FC<Props> = ({ title, items }) => {
  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      <Filter searchTerm={""} onChange={() => {}} />
      {items.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default observer(Items);
