import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Fade } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  menu: {
    "& .MuiPaper-rounded": {
      borderRadius: theme.spacing(1)
    }
  }
}));

const C = ({ menuPosition, handleCloseMenu, menuItems }) => {
  const classes = useStyles();
  return (
    <Menu
      className={classes.menu}
      keepMounted
      anchorEl={menuPosition}
      open={Boolean(menuPosition)}
      onClose={handleCloseMenu}
      TransitionComponent={Fade}
    >
      {menuItems.map((item, idx) => (
        <MenuItem key={idx} onClick={item.handleClickMenuItem}>
          {item.text}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default C;
