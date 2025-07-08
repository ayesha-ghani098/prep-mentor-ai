// components/PrimaryButton.tsx
import { Button } from "@mui/material";

interface PrimaryButtonProps {
  type?: "submit" | "button";
  onClick?: () => void;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type = "button",
  onClick,
  children,
}) => {
  return (
    <Button
      type={type}
      variant="contained"
      color="primary"
      onClick={onClick}
      className="w-full py-3 mt-2 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
