import React from "react";
import { Header, Products } from "./components/common";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
 return (
  <div className="App">
   <Header />
   <Switch>
    <Route exact path="/products" component={Products} />
   </Switch>
  </div>
 );
}

export default App;
