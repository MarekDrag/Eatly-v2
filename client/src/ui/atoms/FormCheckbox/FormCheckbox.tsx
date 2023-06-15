import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { Checkbox, FormControlLabel, FormControlLabelProps } from '@mui/material';

type Props<TFormValues extends FieldValues> = {
  label: string;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  rules?: RegisterOptions;
} & Omit<FormControlLabelProps, 'control'>;

export const FormCheckbox = <TFormValues extends Record<string, unknown>>({
  label,
  name,
  register,
  rules,
  ...props
}: Props<TFormValues>) => {
  return (
    <FormControlLabel
      sx={{ color: '#189f80', width: '100%' }}
      label={label}
      control={<Checkbox />}
      {...(register && register(name, rules))}
      {...props}
    />
  );
};
