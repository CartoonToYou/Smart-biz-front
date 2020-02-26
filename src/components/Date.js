import React from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const C = ({ date, handleChangeDate }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          disableToolbar={true}
          autoOk
          variant="static"
          openTo="date"
          value={date}
          onChange={date => handleChangeDate(date)}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default C;
