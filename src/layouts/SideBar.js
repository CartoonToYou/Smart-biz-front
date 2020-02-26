import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  SwipeableDrawer,
  Avatar,
  List,
  ListSubheader,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider
} from "@material-ui/core";

import {
  home,
  calendar,
  leads,
  saleContacts,
  potential,
  saleScript,
  checkIn,
  maintenance,
  meeting,
  leaves
} from "../App";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 270,
    flexShrink: 0
  },
  title: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  titleGradient: {
    background: "linear-gradient(to right, #0043CE, #8C40FF, #DA1E28)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  },
  listItem: {
    "& .MuiListItemAvatar-root": {
      minWidth: "44px"
    },
    "& .MuiListItemIcon-root": {
      minWidth: "44px"
    }
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: "#697077",
    marginRight: theme.spacing(2)
  }
}));

const SideBar = ({ drawer, toggleDrawer, handleChangeRoute }) => {
  const classes = useStyles();

  const name = "POUND";
  const email = "narongrit@blueseas.co.th";

  const CRMList = [
    {
      icon: "/images/icon-home-24.svg",
      text: "Home",
      path: home
    },
    {
      icon: "/images/icon-calendar-24.svg",
      text: "Calendar",
      path: calendar
    },
    {
      icon: "/images/icon-leads-24.svg",
      text: "Leads",
      path: leads
    },
    {
      icon: "/images/icon-saleContact-24.svg",
      text: "Sale contact",
      path: saleContacts
    },
    {
      icon: "/images/icon-potential-24.svg",
      text: "Potential",
      path: potential
    },
    {
      icon: "/images/icon-saleScript-24.svg",
      text: "Sale script",
      path: saleScript
    },
    {
      icon: "/images/icon-checkin-24.svg",
      text: "Check in",
      path: checkIn
    }
  ];

  const OtherList = [
    {
      icon: "/images/icon-maintenance-24.svg",
      text: "Maintenance",
      path: maintenance
    },
    {
      icon: "/images/icon-meeting-24.svg",
      text: "Meeting",
      path: meeting
    },
    {
      icon: "/images/icon-leaves-24.svg",
      text: "Leaves",
      path: leaves
    }
  ];

  return (
    <SwipeableDrawer open={drawer} onClose={toggleDrawer} onOpen={toggleDrawer}>
      <div
        className={classes.drawer}
        // role="presentation"
        // onClick={() => toggleDrawer()}
        // onKeyDown={() => toggleDrawer()}
      >
        <Typography variant="h6" className={classes.title}>
          <strong>
            SMART<span className={classes.titleGradient}>BIZ</span>
          </strong>
        </Typography>
        <List dense>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar className={classes.avatar} alt="my-avatar" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography component="div" color="primary" variant="caption">
                  <strong>{name}</strong>
                </Typography>
              }
              secondary={
                <Typography component="div" color="secondary" variant="caption">
                  <strong>{email}</strong>
                </Typography>
              }
            />
          </ListItem>
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader>
              <Typography variant="caption">
                <strong>CRM MODULE</strong>
              </Typography>
            </ListSubheader>
          }
        >
          {CRMList.map((menu, idx) => (
            <ListItem
              key={idx}
              className={classes.listItem}
              button
              onClick={() => handleChangeRoute(menu.path)}
            >
              <ListItemIcon>
                <img src={menu.icon} alt={`icon-${menu.text}`} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="caption">{menu.text}</Typography>}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader>
              <Typography variant="caption">
                <strong>OTHER MODULE</strong>
              </Typography>
            </ListSubheader>
          }
        >
          {OtherList.map((menu, idx) => (
            <ListItem
              key={idx}
              className={classes.listItem}
              button
              onClick={() => handleChangeRoute(menu.path)}
            >
              <ListItemIcon>
                <img src={menu.icon} alt={`icon-${menu.text}`} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="caption">{menu.text}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
};

SideBar.defaultProps = {
  drawer: false
};

export default SideBar;
