import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppSideBar from "../../component/AppSideBar";
import Search from "../Search";
import { useStyles } from "./style";

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [toRender, setToRender] = useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onHandleSearch = (component) => {
    setToRender(component);
  };
  const getRenderComponent = () => {
    switch (toRender) {
      case "search": {
        return <Search />;
      }
      case "advancedSearch": {
        return null;
      }
      default: {
        return <Search />;
      }
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppSideBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        onHandleSearch={onHandleSearch}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>{getRenderComponent()}</Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
export default Dashboard;
