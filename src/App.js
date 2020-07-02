import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import "./pages/homepage/homepage.styles.scss";
import Homepage from "./pages/homepage/homepage.component";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
