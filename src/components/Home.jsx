import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Menu from './Menu';
import Deal from './Deal';
import { useLoaderData } from 'react-router-dom';
import Chefs from './Chefs';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    return (
        <section>
            <Container fluid className="home-page-banner py-5 px-3">
                <Row>
                    <Col xs={12} md={6}>
                        <img className='rounded-pill w-100' src='https://img.freepik.com/premium-vector/commercial-kitchen-with-cartoon-characters-chef_81522-84.jpg' alt="Delicious food and drinks" />
                    </Col>
                    <Col xs={12} md={6} className="banner-text m-auto ps-5 text-light">
                        <h2 className='fs-1'>Welcome to The Hungry Chef</h2>
                        <p className='fs-4'>Experience the Finest Italian Dining in Town</p>
                        <Button variant="danger">View Menu</Button>
                    </Col>
                </Row>
            </Container>
            <Chefs></Chefs>
            <Menu></Menu>
            <Deal></Deal>
        </section>
    );
};

export default Home;