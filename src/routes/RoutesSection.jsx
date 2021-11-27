import React from "react";

import { routeList } from "./routeList";
import RouteSelection from "./RouteSelection";
import { Switch } from "react-router-dom";

export const RoutesSection = () => {
  return (
    <Switch>
      {routeList.map((route) => (
        <RouteSelection key={route.path} {...route} />
      ))}
    </Switch>
  );
};
