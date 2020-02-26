import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    border: "1px solid #DDE1E6",
    borderRadius: "8px",
    "& .MuiCardContent-root": {
      paddingRight: 0
    }
  },
  gapMiddle: {
    paddingBottom: theme.spacing(2)
  },
  colorBar: {
    borderRadius: "2px",
    marginLeft: "50%",
    marginTop: "50%",
    width: "4px",
    height: "75%"
  }
}));

const C = ({ title, location, date, startTime, endTime, tagColor }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={{ marginBottom: "16px" }}>
      <CardContent>
        <Grid item xs={12} container>
          <Grid item xs={11}>
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
            <Typography variant="caption" color="secondary">
              {location}
            </Typography>
            <div className={classes.gapMiddle} />
            <Typography>
              {date} &bull; {startTime}-{endTime}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <div
              onClick={() => {
                console.log(`Click color: ${tagColor}`);
              }}
              style={{ backgroundColor: tagColor }}
              className={classes.colorBar}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default C;
