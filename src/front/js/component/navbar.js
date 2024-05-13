import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import CoffeeLogo from "./CoffeeLogo";

export const Navbar = () => {
	return (
		<AppBar position="fixed" sx={{ top: 0, backgroundColor: '#2db734' }}>
            <Toolbar>
                <Link to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    <span className="navbar-brand mb-0 h1"> <CoffeeLogo width="100px" height="100px" /></span>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            CODEFUSION CAFE
          </Typography>
                </Link>
                <div className="ml-auto">
                    <Link to="/signIn">
                        <button className="btn btn-primary">Log out</button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
	);
};
