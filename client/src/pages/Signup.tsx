import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { registerAPI } from "../auth/authApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear error on new attempt
    setError("");

    // Frontend validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }

    try {
      const message = await registerAPI(name, email, password);
      console.log("Registered:", message);
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Clear error when typing again
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setError(""); // clear error when user starts typing again
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
          Create Account
        </Typography>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={handleInputChange(setName)}
          />
          <TextField
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
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={handleInputChange(setPassword)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full py-3 mt-2 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            Register
          </Button>
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

export default Signup;
