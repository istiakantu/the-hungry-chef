import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { loginUser, googleLogin, gitLogin} = useContext(AuthContext);
    const [error, setError]=useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelGoogleLogin= ()=>{
        googleLogin()
        navigate(from, {replace : true})
    }
    const handelGitLogin= ()=>{
        gitLogin()
        navigate(from, {replace : true})
    }

    const handelLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;

        loginUser(email,pass)
        .then(result=>{
           const logedUser = result.user;
           navigate(from, {replace : true})
        })
        .catch(error=>(
            setError(error.message)
        ))
        form.reset()

    }
    return (
        <Container className='w-25 mt-5'>
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  required/>
                </Form.Group>
                <Button className='my-3' variant="danger" type="submit">
                    Submit
                </Button>
                <p className='text-center mt-3'><small>New here? <Link to='/register'><span className='text-danger'>Please Register</span></Link></small></p>
            </Form>
            <p className='text-danger'><small>{error}</small></p>
            <div className='text-center mt-5'>
            <Button onClick={handelGoogleLogin} className='mb-3 px-5' variant="outline-danger"> <FaGoogle className='me-4'></FaGoogle>Login With Google</Button> <br></br>
            <Button onClick={handelGitLogin} className='px-5' variant="outline-danger"><FaGithub className='me-4'></FaGithub>Login With Github</Button>
            </div>
        </Container>
    );
};

export default Login;