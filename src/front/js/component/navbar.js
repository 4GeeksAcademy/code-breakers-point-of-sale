import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import CoffeeLogo from "./CoffeeLogo";

export const Navbar = () => {
	return (
		<AppBar position="fixed" sx={{ top: 0, backgroundColor: '#2db734' }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                    <CoffeeLogo width="50px" height="50px" /> {/* Logo on the far left */}
                </Link>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    CODEFUSION CAFE {/* Centered text */}
                </Typography>
                <div className="ml-auto">
                    <Link to="/signIn">
                        <button className="btn btn-primary">EMPLOYEE ID</button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
	);
};
