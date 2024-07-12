import React from "react";

const Checkbox = ({ label, name, checked, onChange, required }) => (
  <label>
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      required={required}
    />
    {label}
  </label>
);

export default Checkbox;
