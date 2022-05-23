import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavbarLoginSignup from "../../components/navbarLoginSignup/navbarLoginSignup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        CodeTube
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();

  const [isToken, setIsToken] = useState(false);
  const [loginEmail, setLoginEmail] = useState();
  const [loginPwd, setLoginPwd] = useState();

  let userEmail = localStorage.getItem("userEmail");
  let userPwd = localStorage.getItem("userPwd");

  const loginHandler = async () => {
    try {
      if (loginEmail === userEmail && loginPwd === userPwd) {
        let loginData = {
          email: loginEmail,
          password: loginPwd,
        };

        let loginUser = await axios.post("/api/auth/login", loginData);
        localStorage.setItem("token", loginUser.data.encodedToken);
        setIsToken(true);
      } else {
        alert("Wrong Email and Password,try Again");
      }
    } catch (error) {
      console.log("error here", error);
    }
  };

  const loginHandlerGuest = async (e) => {
    e.preventDefault();
    try {
      let data = {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      };
      let loginapi = await axios.post("/api/auth/login", data);

      console.log("helooooo", loginapi.data.encodedToken);
      localStorage.setItem("token", loginapi.data.encodedToken);
      setIsToken(true);
      console.log(navigate, isToken, setLoginEmail, setLoginPwd);
    } catch (error) {
      console.log("guest login issue", error);
    }
  };

  useEffect(() => {
    if (isToken) {
      navigate(-1);
    }
  }, [isToken, navigate]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarLoginSignup />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={loginHandler}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={loginHandlerGuest}
              >
                Sign In as Guest
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
