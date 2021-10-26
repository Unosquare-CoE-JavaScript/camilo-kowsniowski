import * as React from "react";

import { Grid, Paper, Typography } from "@mui/material";

import Layout from "./Layout";

export default function Dashboard() {
  return (
    <>
      <Layout />
      <Paper
        sx={{
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
                <Typography gutterBottom variant="h5" component="div">
                  Patiens
                </Typography>
                <Typography variant="body2" gutterBottom>
                  List of patiens
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
