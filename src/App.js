import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './components/navigation/navigation';
import Home  from './components/home/home';
import ChakBox from './components/chakBox';
import './index.css';



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
    )
}
export default App;
 