import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   root: ""
// }));

const C = ({ tabValue, tabLabels, handleChangeTab }) => {
  //   const classes = useStyles();
  return (
    <AppBar position="static" color="default">
      <Tabs
        value={tabValue}
        onChange={handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        {tabLabels.map((tab, idx) => (
          <Tab key={idx} label={tab} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default C;
