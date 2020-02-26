import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    border: "1px solid #DDE1E6",
    borderRadius: "8px",
    "& .MuiCardContent-root": {
      padding: theme.spacing(1.5)
    }
  }
}));

const C = ({ history, title, description, icon, path }) => {
  const classes = useStyles();

  const handleChangeRoute = path => {
    history.push(path);
  };

  return (
    <Card
      className={classes.card}
      style={{ marginBottom: "16px" }}
      onClick={() => handleChangeRoute(path)}
    >
      <CardContent>
        <Grid item xs={12} container alignItems="center">
          <Grid item xs={2}>
            <img src={icon} alt={`icon-${title}`} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle1" color="primary">
              {title}
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withRouter(C);
