import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchProvider } from "./contexts/search";
import Home from "./pages/Home";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <SearchProvider>
          <Route exact path="/" component={Home} />
        </SearchProvider>
      </Switch>
    </Router>
  );
};

export default Routes;
