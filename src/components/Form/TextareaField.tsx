import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type TextareaFieldProps = FieldWrapperPassThroughProps &
  Pick<TextFieldProps, 'minRows'> & {
    registration: Partial<UseFormRegisterReturn>;
  };

export const TextareaField: FC<TextareaFieldProps> = ({
  label,
  error,
  registration,
  required,
  ...props
}) => {
  return (
    <FieldWrapper label={label} error={error} required={required}>
      <TextField
        multiline
        fullWidth
        size="small"
        error={!!error}
        {...props}
        {...registration}
      />
    </FieldWrapper>
  );
};
