import React from 'react';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';
import SignIn from '../../Component/SignIn/SignIn';
import SignUp from '../../Component/SignUp/SignUp';

const SignInAndSignUp = (props: any) => {

    return(

        <SignInAndSignUpContainer className="sign-in-and-sign-up">
         
            <SignIn data={props}/>
            <SignUp data={props}/>

        </SignInAndSignUpContainer>

    )

}


export default SignInAndSignUp;