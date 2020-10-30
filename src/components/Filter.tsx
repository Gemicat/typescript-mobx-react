import React, { useCallback } from "react";

interface Props {
  searchTerm: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter: React.FC<Props> = ({ searchTerm, onChange }) => {
  const handleChange = useCallback(
    (event) => {
      const value = event.target.value;
      onChange(value);
    },
    [onChange]
  );

  return (
    <input
      className="Items-searchTerm"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default Filter;
