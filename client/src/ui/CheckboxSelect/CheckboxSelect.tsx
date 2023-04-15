import { useState } from 'react';

import { InputLabel, ListItemText, Select, SelectChangeEvent, SelectProps } from '@mui/material';

import { StyledCheckbox, StyledMenuItem, Wrapper } from './CheckboxSelect.styles';

const MenuProps = {
  disableAutoFocusItem: true,
  PaperProps: {
    style: {
      maxHeight: 300,
    },
  },
};

type Props = SelectProps<string[]> & {
  options: string[];
  label: string;
  id: string;
};

export const CheckboxSelect = ({ options, label, id, ...props }: Props) => {
  const [values, setValues] = useState<string[]>([]);

  const handleChange = (e: SelectChangeEvent<string[]>) => {
    const value = e.target.value;
    setValues(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Wrapper>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={values}
        onChange={handleChange}
        multiple
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        label={label}
        {...props}
      >
        {options.map((option) => (
          <StyledMenuItem key={option} value={option} disableRipple>
            <StyledCheckbox checked={values.includes(option)} disableRipple />
            <ListItemText primary={option} />
          </StyledMenuItem>
        ))}
      </Select>
    </Wrapper>
  );
};
