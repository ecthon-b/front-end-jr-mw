import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from "./pages/Login/index";
import { Home } from "./pages/Home/index";

const MainRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default MainRoutes;
