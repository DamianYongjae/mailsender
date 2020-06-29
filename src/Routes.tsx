import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home";
import PrayerIntention from "./Components/PrayerIntention";
import Complete from "./Components/Complete";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/prayerintention" component={PrayerIntention} />
      <Route path="/complete" component={Complete} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
