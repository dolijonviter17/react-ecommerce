import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid, Input } from '@material-ui/core';

function FormInput({ name, label }) {
  const { control } = useFormContext();
  const isError = false;
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        render ={() => <TextField name={name} label={label} required/>}                                                                                                                                                                         
        control={control}
        rules={{ required: true }}
        fullWidth
        name={name}
        label={label}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;