import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Login from "pages/login/index";
import MainPage from "pages/mainPage/index";

interface IRouteObject {
  path: string;
  component: any;
  routes?: IRouteObject[];
}

const routes: IRouteObject[] = [
  {
    path: "/mainPage",
    component: MainPage
  },
  {
    path: "/login",
    component: Login
  }
];

function RouteWithSubRoutes(route: IRouteObject) {
  return (
    <Route
      path={route.path}
      render={(props)=> <route.component routes={route.routes} {...props} />}
    />
  );
}

export function RouterFormate() {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact={true} path="/" to={{ pathname: "/login" }} />
          {routes.map( (route, i)=>  <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </div>
    </Router>
  );
}
