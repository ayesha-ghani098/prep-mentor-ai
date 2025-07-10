import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { landingNavbar, landingNavbarButton } from "../styles/tailwindStyles";
import { useAuth } from "../auth/useAuth";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const isOnLandingPage = location.pathname === "/";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static" className={landingNavbar}>
      <Toolbar className="flex justify-between items-center w-full">
        {/* Left-side navigation buttons */}
        <Box className="flex gap-4">
          <Button
            className={landingNavbarButton}
            variant="text"
            onClick={() => navigate("/")}
          >
            🏠 Landing
          </Button>

          {isOnLandingPage && (
            <Button
              className={landingNavbarButton}
              variant="text"
              onClick={() => navigate("/login")}
            >
              🪪 Auth
            </Button>
          )}

          <Button
            className={landingNavbarButton}
            variant="text"
            onClick={() => navigate("/dashboard")}
          >
            📊 Dashboard
          </Button>
          <Button
            className={landingNavbarButton}
            variant="text"
            onClick={() => navigate("/questions")}
          >
            📝 Questions
          </Button>
          <Button
            className={landingNavbarButton}
            variant="text"
            onClick={() => navigate("/answer")}
          >
            ✍️ Answer
          </Button>
          <Button
            className={landingNavbarButton}
            variant="text"
            onClick={() => navigate("/feedback")}
          >
            💬 Feedback
          </Button>
        </Box>

        {/* Right-side user avatar and logout */}
        {user && (
          <Box className="flex items-center gap-3">
            <Avatar>{user.email?.[0]?.toUpperCase() || "U"}</Avatar>
            <Typography className="text-white hidden sm:block">
              {user.email}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleLogout}
              className="border-white text-white hover:bg-white hover:text-black transition"
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
