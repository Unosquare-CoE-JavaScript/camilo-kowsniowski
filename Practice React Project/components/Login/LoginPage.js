import React from "react";
import LoginButton from "../UI/LoginButton";
import classes from "./LoginPage.module.css";
import logo from "../assets/logo.png";

// import { useHistory } from "react-router";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Container,
  Grid,
  createTheme,
  Paper,
} from "@mui/material";

const LoginPage = () => {
  // const history = useHistory();

  // resposive Font

  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:400px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  return (
    <>
      <AppBar
        className={classes.backgroundColor}
        style={{ backgroundColor: "#1FBDC8" }}
      >
        <Toolbar>
          <img
            src={logo}
            alt="logo"
            style={{
              marginLeft: "20px",
              height: 50,
              borderRadius: 8,
              border: "3px solid white",
            }}
          ></img>
        </Toolbar>
      </AppBar>
      <CssBaseline className="Login" />
      <Container style={{ marginTop: "100px" }}>
        <Paper
          sx={{
            p: 5,
            margin: "auto",
            maxWidth: 900,
            height: 500,
            flexGrow: 5,
            boxShadow: 1,
            borderRadius: 5,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={20}>
                <Typography
                  variant="h3"
                  align="center"
                  marginTop="200px"
                  gutterBottom
                >
                  Welcome To Back!!
                </Typography>
              </Grid>
              <img
                src="https://i.ibb.co/K2DNz6S/logo-1.png"
                alt="logo-1"
                border="0"
                style={{
                  marginLeft: "50px",
                  height: 100,
                  borderRadius: 8,
                  border: "3px solid white",
                }}
              ></img>
            </Grid>
          </Grid>

          <Grid item xs container direction="column" spacing={20}>
            <Typography
              variant="subtitle"
              width="300px"
              marginTop="180px"
              marginLeft="200px"
              gutterBottom
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </Grid>

          <Grid item xs container direction="column">
            <LoginButton />
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default LoginPage;
