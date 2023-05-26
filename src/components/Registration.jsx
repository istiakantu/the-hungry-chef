import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError]=useState('');
    const [success, setSuccess]= useState();
    const navigate = useNavigate();

    const handelRegister= event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.password.value;

        if(pass.length < 6){
            setError('Password Should be at least six Character')
            return
        }

        createUser(email,pass)
        .then(result=>{
            const createdUser = result.user;
            setSuccess('Account Created Successfully')
            updateProfile(auth.currentUser,{
                displayName:name, photoURL:photo
            })
        .then(()=>{
            navigate('/')
        })
        })
        .catch(error=>{
            setError(error.message)
        })
        form.reset()
    }
    return (
        <Container className='w-25 mt-5'>
            <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'><small>{error}</small></p>
                <p className='text-success'><small>{success}</small></p>
                <Button className='my-3' variant="danger" type="submit">
                    Submit
                </Button>
                <p className='text-center'><small>Already Have an Account? <Link className='text-danger' to='/login'><span>Login</span></Link></small></p>
            </Form>
        </Container>
    );
};

export default Registration;