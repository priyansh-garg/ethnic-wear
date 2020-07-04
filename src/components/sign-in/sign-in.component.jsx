import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/input-form/input-form.component";
import CustomButton from "../custom-button/custom-buttom.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.util";
class SignIn extends React.Component{
    constructor(props)
    {
        super(props);

        this.state={
            email:"",
            password:""
        };
    }
    submitHandler= (async event=>{
        event.preventDefault();
        const {email,password}=this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:"",
                password:""
            });
        } catch (error) {
            console.log(error);
            
        }
        
        
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
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn="true">Sign In With Google</CustomButton>
            </div>
        </form>
        </div>
      );
    }
}
export default SignIn;