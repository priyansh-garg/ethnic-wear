import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import "./pages/homepage/homepage.styles.scss";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      
      <Route exact path="/shop" component={Shop}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
