import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
