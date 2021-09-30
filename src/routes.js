import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from "./pages/Login/index";

const MainRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default MainRoutes;
