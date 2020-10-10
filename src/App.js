import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./pages/Top";
import NavBar from "./components/NavBar";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/quiz" component={Quiz} />
          <Route render={() => <h4>not found...</h4>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
