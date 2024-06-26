import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Box,
  Container,
  CssBaseline,
  Snackbar,
  Alert as MuiAlert,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import CoffeeImg from "../../img/coffeeLogo.png";

const CoffeeLogo = ({ width, height }) => {
    return <img src={CoffeeImg} alt="Coffee Logo" style={{ width, height }} />;
};

function SignIn() {
  const [open, setOpen] = useState(false); // State to control Snackbar open/close
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await actions.login(employeeId, password);
      navigate('/regions');
    } catch (error) {
      console.error("Login failed:", error);
      setOpen(true);
      setEmployeeId('');
      setPassword('');
    }
  };

  // Close Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#2db734' }}> 
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            CODEFUSION CAFE
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Align items to the start (left)
          }}
        >
          <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
            Sign in
          </Typography>
          <Typography component="h1" variant="body1" sx={{ mt: 1 }}>
            New user? <Link to="/signup" variant="body2">Create an account</Link>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="employee-id"
              label="Employee ID"
              name="employee-id"
              autoComplete="employee-id"
              autoFocus
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#2db734' }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      {/* Incorrect password message */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="error" sx={{ width: '100%', textAlign: 'center' }}>
          Incorrect password. Please try again.
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default SignIn;
