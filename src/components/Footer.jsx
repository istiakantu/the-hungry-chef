import React from 'react';
import logo from '../assets/deal/Logo 2-01.png'
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className=' bg-black text-center p-3 mt-5'>
            <Row className='align-items-center'>
                <Col xs={12} md={6}>
                    <img className='footer-logo' src={logo} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <p className='text-secondary me-5'>The Hungry Chef is an Italian restaurant serving authentic Italian cuisine with a modern twist, using fresh, locally-sourced ingredients and traditional cooking techniques. Located in the heart of the city, The Hungry Chef offers a cozy and inviting atmosphere perfect for a romantic dinner or a night out with friends and family.</p>
                </Col>
            </Row>
            <h4 className='text-white'>Copyright 2023 © Istiak</h4>
        </footer>
    );
};

export default Footer;