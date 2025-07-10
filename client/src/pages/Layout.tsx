import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../auth/AuthContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  // Routes where Navbar should NOT appear
  const hideNavbarRoutes = ["/login", "/signup"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  const shouldShowNavbar =
    !shouldHideNavbar && (token || location.pathname === "/");

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
