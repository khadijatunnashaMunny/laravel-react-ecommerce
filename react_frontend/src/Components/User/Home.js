import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";

const useStyles = makeStyles({
  ecomDescription: {
    padding: "2%",
  },
  ecomText: {
    alignItems: "center",
    textAlign: "center",
    marginTop: "3%",
  },
});
function Home() {
  const classes = useStyles();

  return (
    <div className={classes.ecomText}>
      <Header />

      <Typography className={classes.ecomDescription} variant="h3">
        Ecommerce
      </Typography>

      <Typography className={classes.ecomDescription}>
        Create an online store with the leading eCommerce platform Sell online
        with a professional online store. Launch, run and scale your online
        store with our industry-leading eCommerce website builder and advanced
        business features.
      </Typography>
    </div>
  );
}

export default Home;
