import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';

type Props = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  label: string;
  defaultValue?: string;
};

export const PasswordField = ({ showPassword, handleClickShowPassword, label, defaultValue }: Props) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={label} variant="outlined">
        {label}
      </InputLabel>
      <OutlinedInput
        id={label}
        label={label}
        defaultValue={defaultValue}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
