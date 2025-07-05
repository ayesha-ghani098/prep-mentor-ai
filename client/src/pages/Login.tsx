import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { loginAPI } from "../auth/authApi";
import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await loginAPI(email, password);
      login(res.user, res.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm" className="mt-10 p-5 shadow-lg rounded-xl">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </Container>
  );
};

export default Login;
