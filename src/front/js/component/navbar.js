import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import CoffeeLogo from "./CoffeeLogo";

export const Navbar = () => {
	return (
		<AppBar position="fixed" sx={{ top: 0, backgroundColor: '#2db734' }}>
            <Toolbar>
                <Link to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    <span className="navbar-brand mb-0 h1"> <CoffeeLogo width="50px" height="50px" /> </span>  
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          CODEFUSION CAFE
          </Typography>
                </Link>
                <div className="ml-auto">
                    <Link to="/signIn">
                        <button className="btn btn-primary">EMPLOYEE ID</button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
	);
};
