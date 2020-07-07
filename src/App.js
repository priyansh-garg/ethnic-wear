import React from 'react';
import {BrowserRouter,Route,Switch, Redirect} from "react-router-dom";
import './App.css';
import "./pages/homepage/homepage.styles.scss";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Authentication from "./pages/authentication/authentication";

import { auth, createUserProfile } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import {selectCurrentUser} from "./redux/user/user.selectors";
import Checkout from './components/checkout/checkout.component';

class App extends React.Component {
   unsubscribe=null;
  componentDidMount(){
    this.unsubscribe=auth.onAuthStateChanged(async user=> {
     // this.setState({currentUser:user});
      
  const {setCurrentUser}=this.props;
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
  };
  componentWillUnmount(){
    this.unsubscribe();
  };
  render(){  
  return (
    <div>
    
    <BrowserRouter>
    <Header />
      <Switch>
      <Route exact path="/" component={Homepage}/>
      
      <Route  path="/shop" component={Shop}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Route exact path="/authenticate" render={()=> this.props.currentUser? (<Redirect to="/" />) : (<Authentication />) }/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
};
}

const mapStateToProps = state=>({
 currentUser: selectCurrentUser(state)
});
const mapDispatchToProps= dispatch=>({
  setCurrentUser: user=>(dispatch(setCurrentUser(user))),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
