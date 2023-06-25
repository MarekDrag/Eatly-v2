import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';

type Props<TFormValues extends FieldValues> = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  label: string;
  defaultValue?: string;
  name: Path<TFormValues>;
  errorMessage: string | undefined;
  register: UseFormRegister<TFormValues>;
  rules?: RegisterOptions;
};

export const PasswordField = <TFormValues extends Record<string, unknown>>({
  showPassword,
  handleClickShowPassword,
  label,
  defaultValue,
  name,
  errorMessage,
  register,
  rules,
}: Props<TFormValues>) => {
  const { onChange, onBlur, ref } = register(name, rules);

  return (
    <FormControl variant="outlined" error={!!errorMessage}>
      <InputLabel htmlFor={label} variant="outlined">
        {label}
      </InputLabel>
      <OutlinedInput
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        name={name}
        id={label}
        defaultValue={defaultValue}
        type={showPassword ? 'text' : 'password'}
        error={!!errorMessage}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};
