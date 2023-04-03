import classNames from 'classnames';
import React from 'react';
import Select, { components } from 'react-select';

export const selectStates = {
  FLAT: 'flat',
};

const CustomSelect = props => {
  const { handleChange, selectedOption, options, children, state } = props;

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {children}
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      className={classNames('react-select-container', {
        'flat-select': state === selectStates.FLAT,
      })}
      classNamePrefix='react-select'
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
      }}
      options={options}
      onChange={handleChange}
      value={options.filter(function (option) {
        return option.value === selectedOption;
      })}
    />
  );
};

export default CustomSelect;
