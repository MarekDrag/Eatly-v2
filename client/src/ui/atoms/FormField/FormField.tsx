import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { TextFieldProps } from '@mui/material';

import { TextField } from '../TextField';

type Props<TFormValues extends FieldValues> = {
  label: string;
  name: Path<TFormValues>;
  errorMessage: string | undefined;
  register: UseFormRegister<TFormValues>;
  rules?: RegisterOptions;
} & TextFieldProps;

export const FormField = <TFormValues extends Record<string, unknown>>({
  label,
  name,
  register,
  errorMessage,
  rules,
  ...props
}: Props<TFormValues>) => {
  const { onChange, onBlur, ref } = register(name, rules);

  return (
    <TextField
      label={label}
      error={!!errorMessage}
      helperText={errorMessage}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      name={name}
      {...props}
    />
  );
};
