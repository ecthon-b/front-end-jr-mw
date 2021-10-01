import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from "./pages/Login/index";
import { Home } from "./pages/Home/index";
import { Filmes } from "./pages/Filmes/index";
import { HQs } from "./pages/HQs/index";

const MainRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/filmes" exact component={Filmes} />
      <Route path="/hqs" exact component={HQs} />
    </Switch>
  </BrowserRouter>
);

export default MainRoutes;
