import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import "./pages/homepage/homepage.styles.scss";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Authentication from "./pages/authentication/authentication";
function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Header />
      <Switch>
      <Route exact path="/" component={Homepage}/>
      
      <Route exact path="/shop" component={Shop}/>
      
      <Route exact path="/authentication" component={Authentication}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
