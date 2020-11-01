import * as React from "react";

interface Props {
  searchTerm: string;
  onChange: (value: string) => void;
}

const Filter: React.FC<Props> = ({ searchTerm, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <input
      className="Items-searchTerm"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default Filter;
