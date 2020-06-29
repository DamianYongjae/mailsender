import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Home from "./Components/Home";
import PrayerIntention from "./Components/PrayerIntention";
import Complete from "./Components/Complete";

const AppRouter = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/prayerintention" component={PrayerIntention} />
      <Route path="/complete" component={Complete} />
    </Switch>
  </HashRouter>
);

export default AppRouter;
