import { TextField } from '@mui/material';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField: FC<InputFieldProps> = ({
  type = 'text',
  label,
  error,
  required,
  registration,
}) => {
  return (
    <FieldWrapper label={label} error={error} required={required}>
      <TextField
        type={type}
        fullWidth
        size="small"
        error={!!error}
        {...registration}
      />
    </FieldWrapper>
  );
};
