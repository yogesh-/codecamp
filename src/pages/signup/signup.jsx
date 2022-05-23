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
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

export default function SignUp() {
  const navigate = useNavigate();
  const initialFormData = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState({ initialFormData });
  const [valid, setValid] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setInputData((values) => ({ ...values, [name]: value }));
  };

  const formValidation = (event) => {
    event.preventDefault();
    // check no empty field

    for (let keys in inputData) {
      if (inputData[keys] === "") {
        setValid(false);
      } else {
        setValid(true);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (valid) {
      (async () => {
        try {
          const response = await axios.post(`/api/auth/signup`, {
            firstName: inputData.fname,
            lastName: inputData.lname,
            email: inputData.email,
            password: inputData.password,
          });

          localStorage.setItem("userEmail", response.data.createdUser.email);
          localStorage.setItem("userPwd", response.data.createdUser.password);

          localStorage.setItem("token", response.data.encodedToken);
          let signToken = localStorage.getItem("token");
          console.log(signToken);
          if (signToken) {
            navigate("/");
          }
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      alert("From Async");
    }
  };

  return (
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
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fname"
                  value={inputData.fname}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lname"
                  value={inputData.lname}
                  onChange={handleChange}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={inputData.email}
                  onChange={handleChange}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={inputData.password}
                  onChange={handleChange}
                  onInput={formValidation}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
