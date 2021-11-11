import React from "react";
import Home from "./components/home/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
