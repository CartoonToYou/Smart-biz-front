import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, MenuItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  space: {
    padding: theme.spacing(2, 2)
  },
  textField: {
    width: "100%",
    "& .MuiInput-underline:before": {
      borderBottom: "none"
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none"
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none"
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "#ffffff"
    }
  },
  icon: {
    "& .MuiSvgIcon-colorSecondary": {
      color: "#697077"
    },
    "& .MuiSvgIcon-colorDisabled": {
      color: "#ffffff"
    }
  }
}));

const C = ({
  placeholder,
  name,
  value,
  icon,
  select,
  dataOptions,
  handleChangeOption
}) => {
  const classes = useStyles();
  return (
    <div className={classes.space}>
      {select ? (
        <TextField
          select
          name={name}
          className={classes.textField}
          // label="TextField"
          value={value}
          placeholder={placeholder}
          onChange={handleChangeOption}
          InputProps={{
            startAdornment: (
              <InputAdornment
                className={classes.icon}
                position="start"
                style={{ paddingRight: "8px" }}
              >
                {icon}
              </InputAdornment>
            )
          }}
        >
          {dataOptions.map((option, idx) => (
            <MenuItem key={idx} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <TextField
          className={classes.textField}
          // label="TextField"
          placeholder={placeholder}
          InputProps={{
            startAdornment: (
              <InputAdornment
                className={classes.icon}
                position="start"
                style={{ paddingRight: "8px" }}
              >
                {icon}
              </InputAdornment>
            )
          }}
        />
      )}
    </div>
  );
};

C.defaultProps = {
  select: false
};

export default C;
