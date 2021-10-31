import React, { useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    // font awesome google icon
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />

    
    // firebase authentication
    const {signInUsingGoogle, processLogin, error } = useAuth();



    // set user's email and password values for log in
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    // get email and password values for log in
    const handleEmailChange = e => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }


    // redirect history for returning from log in page to where user came
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    // handle login
    const handleLogin = e => {
      e.preventDefault();
      processLogin(email,password)
      history.push(redirect_uri)
    }


    // google sign in
    const handleGoogleSignIn = () => {
      signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri)
      })
    }

    return (
        <div className="log-in">
            <h1>Please LogIn</h1>
            <div>
                <Form onSubmit={handleLogin} className="w-25 md-w-50 mx-auto">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
                  </Form.Group>
                  <p>{error}</p>
                  <Button className="btn btn-primary" type="submit">
                    Log In
                  </Button>
                </Form>
                <div className="text-center mt-4">
                    <span>Haven't registered?</span> <Link className="text-decoration-none" to="/register">Register Here</Link>
                    <p>or</p>
                    <button onClick={handleGoogleSignIn} className="btn btn-warning">{googleIcon}oogle Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;