// src/pages/NotFound.tsx
import { Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AnimatedWrapper from "../animation/AnimatedWrapper";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <AnimatedWrapper>
      <Container className="flex flex-col justify-center items-center h-screen text-center">
        <Typography variant="h2" className="text-red-600 font-bold">
          404
        </Typography>
        <Typography variant="h5" className="mt-2 font-semibold">
          Page Not Found
        </Typography>
        <Typography variant="body1" className="text-white mt-2 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Container>
    </AnimatedWrapper>
  );
};

export default NotFound;
