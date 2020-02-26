import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  divider: {
    borderBottom: "1px solid #DDE1E6"
  },
  iconToTextGap: {
    marginRight: theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  }
}));

const Header = ({
  titlePage,
  iconLeft,
  iconRight,
  handleClickLeft,
  handleClickRight,
  borderBottomBar
}) => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={borderBottomBar ? classes.divider : null}
    >
      <Toolbar>
        <IconButton
          onClick={handleClickLeft}
          edge="start"
          className={classes.iconToTextGap}
          //   className={clsx(classes.menuButton, open && classes.hide)}
        >
          {iconLeft}
        </IconButton>
        <Typography variant="h6" noWrap>
          {titlePage}
        </Typography>
        <div className={classes.grow} />
        <IconButton onClick={handleClickRight}>{iconRight}</IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  borderBottomBar: PropTypes.bool
};

Header.defaultProps = {
  borderBottomBar: false
};

export default Header;
