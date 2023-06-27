import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectProps, styled } from '@mui/material';

type Props = SelectProps & {
  items: { value: string; label: string }[];
  label: string;
};

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  background: theme.palette.background.paper,
  width: '100%',
}));

export const Select = ({ items, label, ...props }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <StyledSelect label={label} {...props}>
        {items.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};
