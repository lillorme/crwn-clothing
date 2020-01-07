import React from 'react';
import './SignInAndSignUp.css';
import SignIn from '../../Component/SignIn/SignIn';
import SignUp from '../../Component/SignUp/SignUp';

const SignInAndSignUp = (props: any) => {

    return(

        <div className="sign-in-and-sign-up">
         
            <SignIn data={props}/>
            <SignUp data={props}/>

        </div>

    )

}


export default SignInAndSignUp;