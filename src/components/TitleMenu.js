import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  gapTop: {
    paddingTop: theme.spacing(2)
  },
  gapBottom: {
    paddingBottom: theme.spacing(1)
  }
}));

const C = ({ children, titleMenuText }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.gapTop} />
      <Typography variant="caption" color="secondary">
        <strong>{titleMenuText}</strong>
      </Typography>
      <div className={classes.gapBottom} />
      {children}
    </Fragment>
  );
};

export default C;
