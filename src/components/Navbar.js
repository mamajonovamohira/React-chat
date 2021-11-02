import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../util/const";

const Navabr = () => {
  const user = true

  return (
    <AppBar color={"primary"} position="static">
      <Toolbar variant={"dense"}>
        <Grid container justify={"flex-end"}>
          {user ?
          <Button variant={"outlined"}>Quit</Button>
            :
            <NavLink to={LOGIN_ROUTE}>
          <Button variant={"outlined"}>Login</Button>
            </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navabr;
