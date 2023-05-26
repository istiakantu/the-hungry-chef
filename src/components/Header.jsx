import React, { useContext } from 'react';
import { Button, Container, NavLink, Navbar, } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../assets/deal/LOGO1-01.png'


const Header = () => {

    const { user, logout } = useContext(AuthContext)
    const location = useLocation()

    const handelLogout = () => {
        logout()
            .then()
            .catch()

    }
    return (
        <Navbar bg="light" variant="light">
            <Container className='d-flex justify-content-between '>
                <img className='header-logo' src={logo} alt="" />
                <div className='d-flex m-4'>
                    <Link className={location.pathname === '/' ? 'active ms-5' : 'nav-link ms-5'} to='/'>Home</Link>
                    <Link className={location.pathname === '/blog' ? 'active ms-5' : 'nav-link ms-5'} to='/blog'>Blog</Link>
                </div>
                <div>
                    {user ?
                        <div>
                            <img className='header-img me-2 rounded-circle' src={user ? user.photoURL :''} title={user ? user.displayName :''} alt="" />
                            <Button variant='danger' onClick={handelLogout}>Logout</Button>
                        </div> :
                        <div>
                            <FaUserAlt></FaUserAlt>
                            <Button  className='ms-4' variant='danger'><Link className='me-2 nav-link' to='/login'>Login</Link></Button></div>}
                </div>

            </Container>
        </Navbar>
    );
};

export default Header;