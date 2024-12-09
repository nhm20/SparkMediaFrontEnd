import React from "react";
import bgImg from "../../assets/bgImage.png";
import { Card, Grid } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <Grid container style={{ height: "100%" }}>
        <Grid
          item
          xs={8}
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Card section */}
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ padding: "2rem", width: "90%" }}>
            <div className="flex flex-col items-center mb-5 space-y-1">
              <h1 className="logo text-center">Spark Social</h1>
              <p className="text-center text-sm">
                Connecting Lives, Sharing Stories. Your Social World, Your Way
              </p>
            </div>
            {/* <Login /> */}
            <Register />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
