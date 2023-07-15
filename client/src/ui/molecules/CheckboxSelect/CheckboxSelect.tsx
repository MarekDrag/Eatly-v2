import { Checkbox, InputLabel, ListItemText, Select, SelectProps } from '@mui/material';

import { StyledMenuItem, Wrapper } from './CheckboxSelect.styles';

const MenuProps = {
  disableAutoFocusItem: true,
  PaperProps: {
    style: {
      maxHeight: 300,
    },
  },
};

type Props = SelectProps<string[]> & {
  options: { value: string; label: string }[];
  values: string[];
  label: string;
  id: string;
};

export const CheckboxSelect = ({ options, label, id, values, ...props }: Props) => {
  const renderValue = (values: string[]) => {
    const filteredOptions = options.filter((option) => values.includes(option.value));
    const labels = filteredOptions.flatMap((option) => option.label);

    return labels.join(', ');
  };

  return (
    <Wrapper>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        renderValue={renderValue}
        MenuProps={MenuProps}
        label={label}
        value={values}
        {...props}
      >
        {options.map((option) => (
          <StyledMenuItem key={option.value} value={option.value} disableRipple>
            <Checkbox checked={values.includes(option.value)} />
            <ListItemText primary={option.label} />
          </StyledMenuItem>
        ))}
      </Select>
    </Wrapper>
  );
};
