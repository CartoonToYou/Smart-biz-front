export const Overrides = {
  MuiPaper: {
    elevation1: {
      boxShadow: "none"
    },
    elevation4: {
      boxShadow: "none"
    }
  },
  MuiAppBar: {
    colorPrimary: {
      color: "#21272A",
      backgroundColor: "#ffffff"
    }
  },
  MuiPickersBasePicker: {
    pickerView: {
      border: "1px solid #DDE1E6",
      borderRadius: "8px",
      "& .MuiPickersDay-current": {
        color: "#E84750",
        backgroundColor: "none"
      },
      "& .MuiPickersDay-daySelected": {
        color: "#ffffff",
        backgroundColor: "#E84750"
      }
    }
  },
  MuiPickersCalendarHeader: {
    switchHeader: {
      marginTop: "0px",
      borderBottom: "1px solid #DDE1E6",
      "& .MuiSvgIcon-root": {
        color: "#E84750"
      },
      "& .MuiTypography-body1": {
        fontWeight: "700"
      }
    }
  },
  MuiTabs: {
    root: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #DDE1E6",
      "& .MuiTab-textColorPrimary.Mui-selected": {
        color: "#E84750"
      },
      "& .MuiTabs-indicator": {
        backgroundColor: "#E84750"
      }
    }
  },
  MuiSvgIcon: {
    colorPrimary: {
      color: "#E84750"
    }
  },
  MuiTypography: {
    colorPrimary: {
      color: "#21272A"
    },
    colorSecondary: {
      color: "#697077"
    },
    colorTextPrimary: {
      color: "#E84750"
    }
  }
};

export const ThemeTypography = {
  fontFamily: "IBM Plex Sans"
};

export const MainPalette = {
  background: {
    // default: "linear-gradient(#FFFFFF, #F2F4F8) no-repeat",
    default: "#ffffff",
    paper: "#ffffff"
  }
};
