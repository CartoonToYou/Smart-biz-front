import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Collapse,
  Typography
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const useStyles = makeStyles(theme => ({
  datePicker: {
    "& .MuiFormLabel-root": {
      color: "#A2A9B0"
    },
    "& .MuiInputBase-root": {
      color: "#E84750"
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none"
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none"
    }
  },
  icon: {
    minWidth: theme.spacing(5),
    "& .MuiSvgIcon-colorSecondary": {
      color: "#697077"
    },
    "& .MuiSvgIcon-colorDisabled": {
      color: "#ffffff"
    }
  }
}));

const C = ({
  text,
  icon,
  iconDisabled,
  checked,
  name,
  fromDate,
  fromDateName,
  toDate,
  toDateName,
  handleToggleSwitch,
  handleChangeDateTime
}) => {
  const classes = useStyles();

  return (
    // <span className={classes.space}>
    <List>
      <ListItem>
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        <ListItemSecondaryAction>
          <Switch
            name={name}
            edge="end"
            onChange={handleToggleSwitch}
            checked={checked}
            // inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={!checked}>
        <ListItem>
          <ListItemIcon className={classes.icon}>{iconDisabled}</ListItemIcon>
          <ListItemText
            primary={
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  className={classes.datePicker}
                  autoOk
                  disablePast
                  value={fromDate}
                  label="FROM"
                  format="ddd, MMM DD, YYYY"
                  onChange={date_time =>
                    handleChangeDateTime(date_time, fromDateName)
                  }
                />
              </MuiPickersUtilsProvider>
            }
          />
          <ListItemSecondaryAction>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              style={{ paddingTop: "25%" }}
            >
              {moment(fromDate).format("HH:mm")}
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.icon}>{iconDisabled}</ListItemIcon>
          <ListItemText
            primary={
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  className={classes.datePicker}
                  autoOk
                  disablePast
                  value={toDate}
                  label="TO"
                  format="ddd, MMM DD, YYYY"
                  onChange={date_time =>
                    handleChangeDateTime(date_time, toDateName)
                  }
                />
              </MuiPickersUtilsProvider>
            }
          />
          <ListItemSecondaryAction>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              style={{ paddingTop: "25%" }}
            >
              {moment(toDate).format("HH:mm")}
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </Collapse>
    </List>
    // </div>
  );
};

export default C;
