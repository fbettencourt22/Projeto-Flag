import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Watchlist } from "./components/Watchlist/Watchlist";
import { Watched } from "./components/Watched/Watched";
import { Add } from "./components/Add/Add";
import Nav from "./components/Nav Bar/Nav";

function App() {
  return (
    <Router>
      <Header />
      <Nav />

      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>
        <Route exact path="/watched">
          <Watched />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
