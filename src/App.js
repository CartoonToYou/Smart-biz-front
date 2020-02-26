import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { HashRouter as Router, Switch, Route } from "react-router-dom";

import PublicRoute from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoutes";

import Login from "./pages/Login";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import AddEvent from "./pages/AddEvent";
import Error404PageNotFound from "./pages/Error404PageNotFound";

export const login = "/login",
  // Main Routes
  home = "/",
  calendar = "/calendar",
  leads = "/leads",
  saleContacts = "/sale-contacts",
  potential = "/potential",
  saleScript = "/sale-script",
  checkIn = "/check-in",
  maintenance = "/maintenance",
  meeting = "/meeting",
  leaves = "/leaves",
  // Sub Routes
  addEvent = "/calendar/add-event";

const App = props => {
  console.log(props);
  return (
    <Router>
      <Switch>
        <PublicRoute exact path={login} component={Login} />
        <PrivateRoute exact path={home} component={Home} />
        <PrivateRoute exact path={calendar} component={Calendar} />
        <PrivateRoute exact path={addEvent} component={AddEvent} />
        <Route path="*" component={Error404PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
