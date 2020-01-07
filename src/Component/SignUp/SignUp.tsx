import React from 'react';
import './SignUp.css';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

interface IProps {
    data: string;
}
  
interface IState{
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

class SignUp extends React.Component<IProps, IState>{
    
    constructor(props:IProps){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async(event:any) =>{

        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("Password don't math!");
            return;
        }

        try{

            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument( user, { displayName } );

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })

        }catch(error){

            console.error(error);

        }

    }

    
    handleChange = (event:any) =>{

        const { name, value } = event.target;

        this.setState({
            [name]: value
        } as Pick<IState, keyof IState>);

    }

    render(){

        const {displayName, email, password, confirmPassword } = this.state;

        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <Input 
                        type="text"
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <Input 
                        type="email"
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <Input 
                        type="password"
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <Input 
                        type="text"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <Button
                        type="submit"
                       
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        )

    }
}

export default SignUp;