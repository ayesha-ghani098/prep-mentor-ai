// components/InputField.tsx
import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  fullWidth = true,
  required = false,
  error = false,
  helperText = "",
}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      variant="outlined"
      className="bg-white"
    />
  );
};

export default InputField;
