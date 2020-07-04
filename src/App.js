import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import "./pages/homepage/homepage.styles.scss";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Authentication from "./pages/authentication/authentication";

import { auth } from './firebase/firebase.util';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribe =null;

  componentDidMount(){
    this.unsubscribe=auth.onAuthStateChanged(user=> this.setState({currentUser:user}));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){  
  return (
    <div>
    
    <BrowserRouter>
    <Header user={this.state.currentUser}/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      
      <Route exact path="/shop" component={Shop}/>
      
      <Route exact path="/authenticate" component={Authentication}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}
}

export default App;
