import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import Api, { eventsEndpoint } from "../utils/Api";

import {
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

import MainLayout from "../layouts/MainLayout";

import TitleMenu from "../components/TitleMenu";
import EventCard from "../components/EventCard";
import ModuleCard from "../components/ModuleCard";

class Home extends Component {
  state = {
    allEvents: [],
    drawer: false
  };

  componentDidMount = () => {
    Api(eventsEndpoint, {
      method: "get"
    }).then(res => {
      const allEventsLength = res.count;
      const allEvents = res.rows;
      if (allEventsLength > 0) {
        this.setState({ allEvents });
      }
    });
  };

  toggleDrawer = () => {
    this.setState(prevState => ({ drawer: !prevState.drawer }));
  };

  render() {
    const eventCards = [
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
    const moduleCards = [
      {
        icon: "/images/icon-calendar-32.svg",
        title: "Calendar",
        description: "Create activities and schedules",
        path: calendar
      },
      {
        icon: "/images/icon-leads-32.svg",
        title: "Leads",
        description: "Generate leads from a contact form",
        path: leads
      },
      {
        icon: "/images/icon-saleContact-32.svg",
        title: "Sale contact",
        description: "Centrailize your address book",
        path: saleContacts
      },
      {
        icon: "/images/icon-potential-32.svg",
        title: "Potential",
        description: "Track Opportunities from your leads",
        path: potential
      },
      {
        icon: "/images/icon-saleScript-32.svg",
        title: "Sale script",
        description: "Get all information you needs",
        path: saleScript
      },
      {
        icon: "/images/icon-checkin-32.svg",
        title: "Check in",
        description: "Create avtivities and schedules",
        path: checkIn
      },
      {
        icon: "/images/icon-maintenance-32.svg",
        title: "Maintenance",
        description: "Track and manage requests",
        path: maintenance
      },
      {
        icon: "/images/icon-meeting-32.svg",
        title: "Meeting",
        description: "Schedule employee booking room",
        path: meeting
      },
      {
        icon: "/images/icon-leaves-32.svg",
        title: "Leaves",
        description: "Create a form and approve leave",
        path: leaves
      }
    ];

    const { toggleDrawer } = this;
    const { allEvents, drawer } = this.state;

    return (
      <MainLayout
        titlePage="Home"
        drawer={drawer}
        toggleDrawer={toggleDrawer}
        iconLeft={<MenuIcon color="primary" />}
        iconRight={<LibraryBooksIcon color="primary" />}
        handleClickLeft={toggleDrawer}
        borderBottomBar
      >
        <TitleMenu titleMenuText="UPCOMING">
          {allEvents.length > 0 ? (
            <>
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
            </>
          ) : (
            <h1>No event here!</h1>
          )}
        </TitleMenu>
        <TitleMenu titleMenuText="MODULE">
          {moduleCards.map((card, idx) => (
            <ModuleCard
              key={idx}
              title={card.title}
              icon={card.icon}
              description={card.description}
              path={card.path}
            />
          ))}
        </TitleMenu>
      </MainLayout>
    );
  }
}

export default Home;
