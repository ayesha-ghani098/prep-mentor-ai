// components/InputField.tsx
import { TextField, TextFieldProps } from "@mui/material";
import { inputClass } from "../styles/tailwindStyles";

interface InputFieldProps extends Omit<TextFieldProps, "variant"> {
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ className, ...rest }) => {
  return (
    <TextField
      {...rest}
      variant="outlined"
      className={`${inputClass} ${className || ""}`}
    />
  );
};

export default InputField;
