import React, { Fragment } from "react";
import { Control, Path, FieldValues, useController } from "react-hook-form";

import {
  FormLabel,
  InputProps,
  FormControl,
  FormLabelProps,
  FormControlProps,
  FormHelperTextProps,
  FormHelperText as MuiFormHelperText,
} from "@mui/material";

import { Box, ErrorIcon } from "@/components";
import FormHelperText from "./FormHelperText";
import { PALETTE_COLOR } from "@/configuration";
import { useIntl } from "@/hooks";

export type AugementFormControlBaseProps<T extends FieldValues> = {
  label?: string;
  helperText?: string;
  placeholder?: string;
  InputProps?: InputProps;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: FormControlProps;
  FormHelperTextProps?: FormHelperTextProps;
  control: Control<T, string>;
  name: Path<T>;
};

export type ExtendedInputProps = InputProps & {
  value: any;
  onChange: (...event: any[]) => void;
};

interface NotiErrorProps {
  mess: string;
  err: any;
  notiValue: any;
  notiName: string;
}
type FormControlBaseProps<T extends FieldValues> = AugementFormControlBaseProps<T> & {
  InputComponent: (props: ExtendedInputProps) => JSX.Element;
};

const FormControlBase = <T extends FieldValues>(props: FormControlBaseProps<T>) => {
  const { messages } = useIntl();
  const {
    name,
    label,
    control,
    helperText,
    InputProps,
    placeholder,
    FormLabelProps,
    InputComponent,
    FormControlProps,
    FormHelperTextProps,
  } = props;

  const {
    field: { value, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Fragment>
      <FormControl {...FormControlProps} error={!!error}>
        {/* <FormLabel {...FormLabelProps}>{label}</FormLabel> */}

        <InputComponent
          placeholder={placeholder}
          {...InputProps}
          value={value}
          inputRef={ref}
          onChange={onChange}
          error={!!error}
          endAdornment={error ? <ErrorIcon /> : null}
          sx={{
            ["& .MuiInputBase-input"]: {
              color: error ? PALETTE_COLOR.orange : null,
            },
            ["& ::placeholder"]: {
              color: PALETTE_COLOR.primary,
              textDecoration: "none",
            },
          }}
        />

        {/* <FormHelperText helperText={helperText} FormHelperTextProps={FormHelperTextProps} /> */}
        {/* {error && <MuiFormHelperText>{error.message}</MuiFormHelperText>} */}

        <Box className="messageError">
          {error && (
            <NotiError
              notiName={name}
              notiValue={value}
              mess={messages[`contact.error.${name}`] as string}
              err={error.message}
            />
          )}
        </Box>
      </FormControl>
    </Fragment>
  );
};

export default FormControlBase;

const NotiError = ({ mess, err, notiValue, notiName }: NotiErrorProps) => {
  const { messages } = useIntl();

  if (notiName === "phone_number") {
    if (notiValue === "") {
      return <MuiFormHelperText>{mess}</MuiFormHelperText>;
    }
    return (
      <MuiFormHelperText>
        {messages["contact.error.phone_number2"] as string}
      </MuiFormHelperText>
    );
  }

  if (err.includes("valid email")) {
    return (
      <MuiFormHelperText>
        {messages["contact.error.validEmail"] as string}
      </MuiFormHelperText>
    );
  }
  return <MuiFormHelperText>{mess}</MuiFormHelperText>;
};
