import * as React from "react";
import { StoreContext } from "../store";

const NewItem: React.FC = () => {
  const [value, setValue] = React.useState("");
  const { itemList } = React.useContext(StoreContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedValue = value.trim();
    if (trimmedValue) {
      itemList.addItem(trimmedValue);
      setValue("");
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form className="NewItem" onSubmit={handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    </div>
  );
};

export default NewItem;
