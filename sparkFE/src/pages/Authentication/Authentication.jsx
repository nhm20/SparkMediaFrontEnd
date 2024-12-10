import React from "react";
import bgImg from "../../assets/bgImage.png";
import { Card, Grid } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid className="h-screen overflow-hidden" item xs={7}>
          <img className="h-full w-full" src={bgImg} alt="react logo" />
        </Grid>
        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">Spark Social</h1>
                <p className=" text-center  text-sm w-[70&]">
                  Connecting Lives,Sharing Stories. Your Social World, Your Way
                </p>
              </div>
              {/* <Login /> */}
              <Register/>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
