import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Quotes from "./Component/Quotes/Quotes";
import Add from "./Component/Add/Add";
import Edit from "./Component/Edit/Edit";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Switch>
                  <Route exact path="/" component={Quotes}/>
                  <Route exact path="/quotes" component={Quotes}/>
                  <Route exact path="/quotes/:name" component={Quotes}/>
                  <Route exact path="/add" component={Add}/>
                  <Route exact path="/quotes/:id/edit" component={Edit}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
