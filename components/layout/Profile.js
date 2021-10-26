import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Paper, Typography } from "@mui/material";
import Layout from "./Layout";

const Profile = () => {
  const { user } = useAuth0();
  return (
    <>
      <Layout />
      <div>
        <Paper
          sx={{
            position: "relative",
            display: "flex",
            p: 3,
            margin: "auto",
            maxWidth: 900,
            height: 500,
            flexGrow: 2,
            borderRadius: 5,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h1" component="div">
                    Bienvenido <img src={user.picture} alt={user.name} />
                  </Typography>

                  <Typography variant="body3" gutterBottom>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default Profile;
