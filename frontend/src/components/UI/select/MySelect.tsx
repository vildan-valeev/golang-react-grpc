import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled={true} value="value1">{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}

        </option>
      )}
      <option value="value2">{defaultValue}</option>
    </select>
  );
};

export default MySelect;