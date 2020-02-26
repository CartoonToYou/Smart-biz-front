import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import { home } from "../App";

import MainLayout from "../layouts/MainLayout";
import InputField from "../components/InputField";
import InputDateTime from "../components/InputDateTime";

import TitleIcon from "@material-ui/icons/Title";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RefreshIcon from "@material-ui/icons/Refresh";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import DonutLargeOutlinedIcon from "@material-ui/icons/DonutLargeOutlined";
import SubjectOutlinedIcon from "@material-ui/icons/SubjectOutlined";

export class AddEvent extends Component {
  state = {
    title: "",
    isAllDay: false,
    fromDate: new Date(),
    toDate: new Date(),
    iteration: "one-time-event",
    locaiton: "",
    people: "",
    reminder: 0,
    activity: "",
    note: ""
  };

  componentDidMount = () => {
    const { toDate } = this.state;
    this.setState(prevState => ({
      toDate: prevState.toDate.setHours(toDate.getHours() + 1)
    }));
  };

  handleChangeOption = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleToggleSwitch = e => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };

  handleChangeDateTime = (date_time, name) => {
    this.setState({ [name]: date_time._d });
  };

  handleChangeRoute = () => {
    const { history } = this.props;
    history.replace(home);
  };

  render() {
    const {
      handleChangeOption,
      handleToggleSwitch,
      handleChangeDateTime,
      handleChangeRoute
    } = this;
    const {
      // title,
      isAllDay,
      fromDate,
      toDate,
      iteration,
      // location,
      // people,
      reminder
      // activity,
      // note
    } = this.state;

    const reminderOptions = [
      {
        label: "None",
        value: 0
      },
      {
        label: "At time of event",
        value: 1
      },
      {
        label: "5 mins before",
        value: 5
      },
      {
        label: "10 mins before",
        value: 10
      },
      {
        label: "15 mins before",
        value: 15
      },
      {
        label: "30 mins before",
        value: 30
      },
      {
        label: "1 hour before",
        value: 60
      },
      {
        label: "1 day before",
        value: 1440
      }
    ];

    const iterationOptions = [
      { label: "one-time-event", value: "one-time-event" },
      { label: "daily", value: "daily" },
      { label: "weekly", value: "weekly" },
      { label: "monthly", value: "monthly" },
      { label: "yearly", value: "yearly" }
    ];

    // const fields = [
    //   {
    //     name: "title",
    //     value: title,
    //     placeholder: "Add location",
    //     icon: <LocationOnOutlinedIcon color="secondary" />
    //   }
    // ];

    return (
      <MainLayout
        titlePage="Add Event"
        handleClickLeft={handleChangeRoute}
        iconLeft={<CloseIcon color="primary" />}
        iconRight={<CheckIcon color="primary" />}
        borderBottomBar
        fullWidth
      >
        <InputField
          placeholder="Enter title"
          icon={<TitleIcon color="disabled" />}
        />
        <Divider />
        <InputDateTime
          text="All-day event"
          name="isAllDay"
          checked={isAllDay}
          handleToggleSwitch={handleToggleSwitch}
          fromDate={fromDate}
          fromDateName="fromDate"
          toDate={toDate}
          toDateName="toDate"
          handleChangeDateTime={handleChangeDateTime}
          icon={<AccessTimeIcon color="secondary" />}
          iconDisabled={<AccessTimeIcon color="disabled" />}
        />
        <Divider />
        <InputField
          select
          value={iteration}
          name="iteration"
          handleChangeOption={handleChangeOption}
          dataOptions={iterationOptions}
          icon={<RefreshIcon color="secondary" />}
        />
        <Divider />
        <InputField
          placeholder="Add location"
          icon={<LocationOnOutlinedIcon color="secondary" />}
        />
        <Divider />
        <InputField
          placeholder="Add people"
          icon={<PersonOutlineOutlinedIcon color="secondary" />}
        />
        <Divider />
        <InputField
          select
          value={reminder}
          name="reminder"
          handleChangeOption={handleChangeOption}
          dataOptions={reminderOptions}
          icon={<NotificationsNoneOutlinedIcon color="secondary" />}
        />
        <Divider />
        <InputField
          placeholder="Add activity"
          icon={<DonutLargeOutlinedIcon color="secondary" />}
        />
        <Divider />
        <InputField
          placeholder="Add note"
          icon={<SubjectOutlinedIcon color="secondary" />}
        />
      </MainLayout>
    );
  }
}

export default AddEvent;
