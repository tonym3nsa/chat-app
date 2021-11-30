import React from "react";

import { routeList } from "./routeList";
import AuthRoute from "./AuthRoute";
import { Switch } from "react-router-dom";

export const RoutesList = () => {
  return (
    <Switch>
      {routeList.map((route) => (
        <AuthRoute key={route.path} {...route} />
      ))}
    </Switch>
  );
};
