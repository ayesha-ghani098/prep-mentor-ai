import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../auth/authApi";
import { useAuth } from "../auth/useAuth";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await loginAPI(email, password);
      login(res.user, res.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigationToSignup = () => {
    navigate("/signup");
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
      <Container maxWidth={false} className={centerScreen}>
        <Paper elevation={3} className={cardContainer}>
          <Typography variant="h5" className={cardHeading}>
            Sign In to PrepMentor
          </Typography>

          <form onSubmit={handleSubmit} className={formLayout}>
            <InputField
              className={inputClass}
              label="Email Address"
              value={email}
              onChange={handleInputChange(setEmail)}
              required
              error={!!error && !emailRegex.test(email)}
              helperText={
                !emailRegex.test(email) && email ? "Enter a valid email." : ""
              }
            />

            <InputField
              className={inputClass}
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleInputChange(setPassword)}
              required
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

            <PrimaryButton
              className={primaryButton}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={22} color="inherit" />
              ) : (
                "Sign In"
              )}
            </PrimaryButton>

            {error && <Typography className={errorText}>{error}</Typography>}
          </form>

          <Typography
            variant="body2"
            className="text-center mt-6 text-gray-600 text-sm"
          >
            Don&apos;t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={handleNavigationToSignup}
            >
              Sign Up
            </span>
          </Typography>
        </Paper>
      </Container>
    </AnimatedWrapper>
  );
};

export default Login;
