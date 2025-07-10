import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { registerAPI } from "../auth/authApi";
import { useNavigate } from "react-router-dom";
import {
  centerScreen,
  cardContainer,
  cardHeading,
  formLayout,
  errorText,
  inputClass,
  primaryButton,
} from "../styles/tailwindStyles";
import AnimatedWrapper from "../components/animation/AnimatedWrapper";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }

    setLoading(true);
    try {
      const message = await registerAPI(name, email, password);
      console.log("Registered:", message);
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigationToLogin = () => {
    navigate("/login");
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setError("");
    };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <AnimatedWrapper>
      <Container maxWidth="sm" className={centerScreen}>
        <Paper elevation={3} className={cardContainer}>
          <Typography variant="h5" className={cardHeading}>
            Create Account
          </Typography>

          <form onSubmit={handleSubmit} className={formLayout}>
            <TextField
              className={inputClass}
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={handleInputChange(setName)}
            />
            <TextField
              className={inputClass}
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={handleInputChange(setEmail)}
              error={!!error && !emailRegex.test(email)}
              helperText={
                !emailRegex.test(email) && email ? "Enter a valid email." : ""
              }
            />
            <TextField
              className={inputClass}
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={handleInputChange(setPassword)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              className={primaryButton}
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={22} color="inherit" />
              ) : (
                "Register"
              )}
            </Button>

            {error && <Typography className={errorText}>{error}</Typography>}
          </form>

          <Typography
            variant="body2"
            className="text-center mt-6 text-gray-600 text-sm"
          >
            Already have an account?{" "}
            <span
              onClick={handleNavigationToLogin}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </Typography>
        </Paper>
      </Container>
    </AnimatedWrapper>
  );
};

export default Signup;
