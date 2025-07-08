import { useState } from "react";
import { Container, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../auth/authApi";
import { useAuth } from "../auth/useAuth";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
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

    try {
      const res = await loginAPI(email, password);
      login(res.user, res.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setError(""); // ✅ clear error when user starts typing
    };

  return (
    <Container
      maxWidth="sm"
      className="flex items-center justify-center min-h-screen"
    >
      <Paper elevation={3} className="w-full p-8 rounded-2xl shadow-xl">
        <Typography
          variant="h4"
          className="text-center mb-6 font-semibold text-gray-800"
        >
          Welcome Back
        </Typography>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <InputField
            label="Email"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
            error={!!error && !emailRegex.test(email)}
            helperText={
              !emailRegex.test(email) && email ? "Enter a valid email." : ""
            }
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={handleInputChange(setPassword)}
            required
          />
          <PrimaryButton type="submit">Login</PrimaryButton>

          {error && (
            <Typography className="text-red-600 text-sm text-center mt-2">
              {error}
            </Typography>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
