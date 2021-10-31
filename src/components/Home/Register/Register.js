import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  // font awesome google icon
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />

    // firebase authentication
    const {signInUsingGoogle, createNewUser, error } = useAuth();


    // set user's name, email and password values for new user registration
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    // get name, email and password values for new user registration
    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    
    // redirect history for returning from log in page to where user came
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    // google sign in
    const handleGoogleSignIn = () => {
      signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri)
      })
    }

    // new user registration
    const handleRegister = e => {
      e.preventDefault();
      createNewUser(name,email,password);
    }
    

    return (
        <div className="register">
            <h1>Please Register</h1>
            <div>
                <Form onSubmit={handleRegister} className="w-25 mx-auto">
                  <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                  </Form.Group>
                  <p>{error}</p>
                  <Button className="btn btn-primary" type="submit">
                    Register
                  </Button>
                </Form>
                <div className="text-center mt-4">
                    <span>Already registered?</span> <Link className="text-decoration-none" to="/login">Log In Here</Link>
                    <p>or</p>
                    <button onClick={handleGoogleSignIn} className="btn btn-warning">{googleIcon}oogle Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;