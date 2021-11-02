import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import React from "react";

const Navabr = () => {
  const user = true

  return (
    <AppBar color={"primary"} position="static">
      <Toolbar>
        <Grid container justify={"flex-end"}>
          {user ?
          <Button variant={"outlined"}>Quit</Button>
            :
          <Button variant={"outlined"}>Login</Button>

          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navabr;
