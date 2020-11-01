import React from "react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "../store";
import Filter from "./Filter";
import { ItemsContainer } from "./ItemsContainer";
import NewItem from "./NewItem";
import { Title } from "./Title";
import { Items } from "./Items";

export const App: React.FC = observer(() => {
  const { itemList } = React.useContext(StoreContext);

  return (
    <div className="Application">
      <NewItem />
      <ItemsContainer>
        <Title title="Unpacked Items" items={itemList.unpackedItems} />
        <Filter
          searchTerm={itemList.unpackedItemsFilter}
          onChange={itemList.updateUnpackedItemsFilter}
        />
        <Items items={itemList.filteredUnpackedList} />
      </ItemsContainer>
      <ItemsContainer>
        <Title title="Packed Items" items={itemList.packedItems} />
        <Filter
          searchTerm={itemList.packedItemsFilter}
          onChange={itemList.updatePackedItemsFilter}
        />
        <Items items={itemList.filteredPackedList} />
      </ItemsContainer>
      <button onClick={itemList.unpackAll} className="button full-width">
        Mark All As Unpacked
      </button>
    </div>
  );
});
