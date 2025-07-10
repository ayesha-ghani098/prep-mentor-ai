// components/PrimaryButton.tsx
import { Button } from "@mui/material";

interface PrimaryButtonProps {
  type?: "submit" | "button";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type = "button",
  onClick,
  children,
  className,
  disabled = false,
}) => {
  return (
    <Button
      type={type}
      variant="contained"
      color="primary"
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
