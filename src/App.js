import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './routes/Home';
import GreetingCat from './routes/GreetingCat';
import Summary from './routes/Summary';
import Cats  from "./routes/Cats";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cat/:greeting" component={GreetingCat} />
          <Route exact path='/summary' component={Summary}/>
          <Route exact path="/gif" component={Cats} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;