import { useState } from "react";

const SortDropdown = ({ options, onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSortChange(selectedValue);
  };

  return (
    <select value={selectedOption} onChange={handleSortChange}>
      <option value="">Sort by</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortDropdown;
