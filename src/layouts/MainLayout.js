import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import {
  ThemeProvider,
  createMuiTheme,
  makeStyles
} from "@material-ui/core/styles";
import { CssBaseline, Container, Grid } from "@material-ui/core";

import TabBar from "../components/TabBar";
import { ThemeTypography, MainPalette, Overrides } from "../styles/Main";

import { home } from "../App";
import Header from "./Header";
import SideBar from "./SideBar";

const theme = createMuiTheme({
  typography: ThemeTypography,
  palette: MainPalette,
  overrides: Overrides
});

const useStyles = makeStyles(theme => ({
  headerSpacing: {
    marginTop: theme.spacing(7)
  },
  noContainer: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0)
  }
}));

const MainLayout = ({
  children,
  history,
  location,
  titlePage,
  drawer,
  iconLeft,
  iconRight,
  borderBottomBar,
  fullWidth,
  tabBar,
  tabValue,
  tabLabels,
  handleClickLeft,
  handleClickRight,
  toggleDrawer,
  handleChangeTab
}) => {
  const classes = useStyles();

  const handleChangeRoute = path => {
    history.push(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        titlePage={titlePage}
        iconLeft={iconLeft}
        iconRight={iconRight}
        handleClickLeft={handleClickLeft}
        handleClickRight={handleClickRight}
        borderBottomBar={borderBottomBar}
      />
      {location.pathname === home && (
        <SideBar
          drawer={drawer}
          toggleDrawer={toggleDrawer}
          handleChangeRoute={handleChangeRoute}
        />
      )}
      {tabBar && (
        <>
          <div className={classes.headerSpacing} />
          <TabBar
            tabValue={tabValue}
            tabLabels={tabLabels}
            handleChangeTab={handleChangeTab}
          />
        </>
      )}
      <Container className={fullWidth ? classes.noContainer : null}>
        {!tabBar && <div className={classes.headerSpacing} />}
        <Grid>{children}</Grid>
      </Container>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  tabBar: PropTypes.bool
};

MainLayout.defaultProps = {
  fullWidth: false,
  tabBar: false
};

export default withRouter(MainLayout);
