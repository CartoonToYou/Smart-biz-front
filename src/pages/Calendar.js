import React, { Component } from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AddIcon from "@material-ui/icons/Add";

import { home } from "../App";

import MainLayout from "../layouts/MainLayout";
import TabPanel from "../components/TabPanel";
import Menu from "../components/Menu";
import EventCard from "../components/EventCard";
import EventCalendar from "../components/Date";

const tabLabels = ["Recently", "Overview", "History"];

class Calendar extends Component {
  state = {
    menuPosition: null,
    tabValue: 0,
    allEvents: [],
    date: new Date()
  };

  componentDidMount = () => {
    const allEvents = [
      {
        id: 1,
        title: "Rajthanee hospital flow",
        location: "Sinn Sathon Tower",
        date: "20-12-2019",
        start_time: "09:00",
        end_time: "10:30",
        tag_color: "red"
      },
      {
        id: 2,
        title: "Krungthai bank pitch",
        location: "KTB Head Office",
        date: "12-01-2020",
        start_time: "09:00",
        end_time: "10:30",
        tag_color: "navy"
      }
    ];
    this.setState({ allEvents });
  };

  handleClickMenu = e => {
    this.setState({ menuPosition: e.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ menuPosition: null });
  };

  handleChangeTab = (_, newValue) => {
    this.setState({ tabValue: newValue });
  };

  handleChangeRoute = () => {
    const { history } = this.props;
    history.replace(home);
  };

  handleChangeDate = selected => {
    this.setState({ date: selected._d });
  };

  render() {
    const {
      handleChangeRoute,
      handleChangeTab,
      handleChangeDate,
      handleClickMenu,
      handleCloseMenu
    } = this;
    const { menuPosition, tabValue, allEvents, date } = this.state;
    const { history, location } = this.props;

    const menuItems = [
      {
        text: "Event",
        handleClickMenuItem() {
          history.push(`${location.pathname}/add-event`);
        }
      },
      {
        text: "Reminder",
        handleClickMenuItem() {
          console.log("Click: Reminder");
          // history.push(`/${location.pathname}/add-event`)
        }
      }
    ];

    return (
      <MainLayout
        titlePage="Calendar"
        handleClickLeft={handleChangeRoute}
        handleClickRight={handleClickMenu}
        iconLeft={<KeyboardBackspaceIcon color="primary" />}
        iconRight={<AddIcon color="primary" />}
        tabBar
        tabValue={tabValue}
        tabLabels={tabLabels}
        handleChangeTab={handleChangeTab}
      >
        <div style={{ paddingTop: "16px" }} />
        <TabPanel value={tabValue} index={0}>
          {allEvents.map(card => (
            <EventCard
              key={card.id}
              title={card.title}
              location={card.location}
              date={card.date}
              startTime={card.start_time}
              endTime={card.end_time}
              tagColor={card.tag_color}
            />
          ))}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <EventCalendar date={date} handleChangeDate={handleChangeDate} />
          {allEvents.map(card => (
            <EventCard
              key={card.id}
              title={card.title}
              location={card.location}
              date={card.date}
              startTime={card.start_time}
              endTime={card.end_time}
              tagColor={card.tag_color}
            />
          ))}
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <div>History</div>
        </TabPanel>
        <Menu
          menuItems={menuItems}
          menuPosition={menuPosition}
          handleCloseMenu={handleCloseMenu}
        />
      </MainLayout>
    );
  }
}

export default Calendar;
