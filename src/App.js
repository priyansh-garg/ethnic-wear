import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import "./pages/homepage/homepage.styles.scss";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Authentication from "./pages/authentication/authentication";

import { auth, createUserProfile } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {
  const {setCurrentUser}=this.props;
  componentDidMount(){
    this.unsubscribe=auth.onAuthStateChanged(async user=> {
     // this.setState({currentUser:user});

      if(user){
        const userRef= await createUserProfile(user);

        userRef.onSnapshot(snapShot=>{
          
            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            });
          
        });
      }
      
      setCurrentUser(user);
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){  
  return (
    <div>
    
    <BrowserRouter>
    <Header />
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
const mapDispatchToProps= (dispatch=>{
  setCurrentUser= (user=>dispatch(setCurrentUser:user));
});
export default connect(null,mapDispatchToProps)(App);
