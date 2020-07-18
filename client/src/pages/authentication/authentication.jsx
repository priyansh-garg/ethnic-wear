import React from 'react';
import "./authentication.styles.scss";
import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';

const Authentication=()=>(
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <Signup/>
    </div>
);


export default Authentication;
