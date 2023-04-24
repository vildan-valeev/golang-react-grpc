import React, {FC} from 'react';

interface MySelectProps {
  options: any
  defaultValue: any
  value:any
  onChange: any
}

const MySelect: FC<MySelectProps> = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled={true} value="value1">{defaultValue}</option>
      {options.map((option:any) =>
        <option key={option.value} value={option.value}>
          {option.name}

        </option>
      )}
      <option value="value2">{defaultValue}</option>
    </select>
  );
};

export default MySelect;
