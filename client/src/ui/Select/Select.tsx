import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectProps } from '@mui/material';

type Props = SelectProps & {
  items: string[];
  label?: string;
};

export const Select = ({ items, label, ...props }: Props) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} {...props}>
        {items.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
