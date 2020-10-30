import React, { useContext } from "react";
import { observer } from "mobx-react";
import NewItem from "./NewItem";
import Items from "./Items";
import { StoreContext } from "..";

const UnpackedItems = observer(() => {
  const itemList = useContext(StoreContext);
  return <Items title="Unpacked Items" items={itemList.unpackedItems} />;
});

const PackedItems = observer(() => {
  const itemList = useContext(StoreContext);
  return <Items title="Packed Items" items={itemList.packedItems} />;
});

const Application = () => {
  return (
    <div className="Application">
      <NewItem />
      <UnpackedItems />
      <PackedItems />
      <button className="button full-width">Mark All As Unpacked</button>
    </div>
  );
};

export default Application;
