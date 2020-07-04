import React from "react";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-buttom.component";
import FormInput from "../input-form/input-form.component";
import { auth, createUserProfile } from "../../firebase/firebase.util";


class Signup extends React.Component{
        constructor(){
            super();
            this.state={
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            }
        }
        handleChange=(event)=>{
            const {value,name}=event.target;
            this.setState({[name]:value});
        }
        handleSubmit=async (event)=>{
            event.preventDefault();

            const {displayName,email,password,confirmPassword}=this.state;

            if(password!==confirmPassword)
            alert("Passwords don't match");
            else
            {
                try {
                    const {user}=await auth.createUserWithEmailAndPassword(email,password);
                  //  console.log(user);
                   await  createUserProfile(user,{displayName});
                    this.setState({
                        
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
                    });
                } catch (error) {
                    
                }
            }

        }
        render(){
            
            const {displayName,email,password,confirmPassword}=this.state;
            return(
                <div className="sign-up">
                    <h2 className="title">I don't have an Account</h2>
                    <span>Sign up with your e-mail and password</span>
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                        <FormInput 
                        type="text"
                        name="displayName"
                        label="Name"
                        value={displayName}
                        onChange={this.handleChange}
                        required
                           />
                           
                        <FormInput 
                        type="email"
                        name= "email"
                        label="Email"
                        value={email}
                        onChange={this.handleChange}
                        required
                           />
                           
                        <FormInput 
                        type="password"
                        name= "password"
                        label="Password"
                        value={password}
                        onChange={this.handleChange}
                        required
                           />
                           
                        <FormInput 
                        type="password"
                        name= "confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                           />
                           <CustomButton type="submit">Sign Up</CustomButton>
                    </form>
                </div>
            );
        }

};

export default Signup;