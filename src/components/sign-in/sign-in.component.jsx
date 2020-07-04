import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/input-form/input-form.component";
import CustomButton from "../custom-button/custom-buttom.component";
import { signInWithGoogle } from "../../firebase/firebase.util";
class SignIn extends React.Component{
    constructor(props)
    {
        super(props);

        this.state={
            email:"",
            password:""
        };
    }
    submitHandler=(event=>{
        event.preventDefault();
        this.setState({
            email:"",
            password:""
        })
    });
    changeHandler=(event=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    });
    render(){
      return(
        <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password </span>
        <form onSubmit={this.submitHandler}>
            <FormInput type="email" name="email" value={this.state.email} label="Email" onChange={this.changeHandler}  required></FormInput>
           
            
            <FormInput type="password" name="password" value={this.state.password} label="Password" onChange={this.changeHandler} required/>
           <div className="buttons">
            <CustomButton type="submit" value="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn="true">Sign In With Google</CustomButton>
            </div>
        </form>
        </div>
      );
    }
}
export default SignIn;