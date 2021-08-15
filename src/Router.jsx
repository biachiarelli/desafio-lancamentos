import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PastLaunches from "./pages/PastLaunches";
import UpcomingLaunches from "./pages/UpcomingLaunches";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ultimos-lancamentos" exact component={PastLaunches} />
        <Route
          path="/proximos-lancamentos"
          exact
          component={UpcomingLaunches}
        />
      </Switch>
    </Router>
  );
}
