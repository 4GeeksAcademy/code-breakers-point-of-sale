import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import CoffeeLogo from "./CoffeeLogo";
import { Context } from "../store/appContext"; // Import your context

export const Navbar = () => {
  const location = useLocation();
  const { store, actions } = useContext(Context); // Access store and actions from context
  const { user } = store; // Destructure user from store

  const isSpecialPage = location.pathname === "/signup" || location.pathname === "/";

  return (
    <AppBar position="fixed" sx={{ top: 0, backgroundColor: '#2db734', zIndex: '9999' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <CoffeeLogo width="50px" height="50px" />
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          CODEFUSION CAFE
        </Typography>
        <div style={{ display: 'flex', gap: '10px' }}>
          {!isSpecialPage && (
            <Button variant="contained" color="error" onClick={actions.signOut}>
              LOGOUT
            </Button>
          )}
          <Link to="/transactions">
            <Button variant="contained" color="primary">
              {user.isSignedIn ? user.username : "EMPLOYEE ID"} {/* Display username if signed in, else "EMPLOYEE ID" */}
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
