import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handlerSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

        this.setState({email: '', password: ''})
    }

    changeHandler = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlerSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    handleChange={this.changeHandler} 
                    value={this.state.email} 
                    label="email"
                    required/>
                    <FormInput 
                    name="password"
                    type="password" 
                    handleChange={this.changeHandler} 
                    value={this.state.password} 
                    label="password"
                    required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;