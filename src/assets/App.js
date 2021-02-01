import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/navigation/navigation";
import Home from "../modules/containers/Form.container";
import ChakBox from "../modules/containers/SubmitionPageContainer";
import "./index.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/chakbox" component={ChakBox} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
