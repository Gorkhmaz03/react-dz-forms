import React from "react";

const RadioButton = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  required,
}) => (
  <div>
    {label}:
    {options.map((option) => (
      <label key={option}>
        <input
          type="radio"
          name={name}
          value={option}
          checked={selectedValue === option}
          onChange={onChange}
          required={required}
        />
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </label>
    ))}
  </div>
);

export default RadioButton;
