import React from "react";
import { Switch, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Jump from "./components/Jump";
import JumpSq from "./components/JumpSq";
import NotFound from "./components/NotFound";
import YoungJump from "./components/YoungJump";

const App: React.FC = () => {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jump">
            <Jump />
          </Route>
          <Route path="/jump-sq">
            <JumpSq />
          </Route>
          <Route path="/young-jump">
            <YoungJump />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      <Footer />
      
    </>
  );
}

export default App;
