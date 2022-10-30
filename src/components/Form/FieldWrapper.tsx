import { FormControl, FormHelperText, FormLabel } from '@mui/material';
import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

export type FieldWrapperProps = {
  label?: string;
  required?: boolean;
  error?: FieldError;
  readonly children: ReactNode;
};
export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>;

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  label,
  children,
  required,
  error,
}) => {
  return (
    <FormControl fullWidth error={!!error} required={required}>
      <FormLabel sx={{ pb: 0.5 }}>{label}</FormLabel>
      {children}
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};
