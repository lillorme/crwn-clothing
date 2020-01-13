import React from 'react';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';
  
interface IProps {
    data: string;
}
  
interface IState{
    email: string,
    password: '',
}

class SignIn extends React.Component<IProps, IState>{
   
    constructor(props: IProps){
        
        super(props);
    
        this.state = {
            email: '',
            password: '',
        }
    
    }

    handleSubmit = async(event:any) => {

        event.preventDefault();

        const { email, password } = this.state;

        try{

            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email:'',
                password:'',
            });

        }catch(error){

            console.error(error);

        }

    }
    
    handleChange = (event: any) => {

        const { value, name } = event.target;

        this.setState({
            [name]: value
        } as Pick<IState, keyof IState>);

    }

    render(){
    
        return (
            <div className="sign-in">

                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <Input
                        label="Email"
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        onChange = {this.handleChange}
                        required 
                    />

                    <Input 
                        label="Password"
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChange = {this.handleChange}
                        required
                    />
                    <div className="buttons">
                    <Button 
                        type='submit' 
                        value='Submit Form'
                    > Sign In</Button>
                    <Button 
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                    > Sign In With Google</Button>
                    </div>
                  

                </form>
            </div>
        );
        
    }
      
}

export default SignIn;