import React from "react";

const FieldForm = ({ label, type, name, value, onChange, required }) => (
  <label>
    {label}:
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </label>
);

export default FieldForm;
