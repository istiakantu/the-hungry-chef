import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../assets/menu/1426577842-1858323.jpeg'
import img2 from '../assets/menu/1426576976-4881966.jpeg'
import img3 from '../assets/menu/8433819403_2de9b11f7a_k.jpg'
import img4 from '../assets/menu/1426579159-4523608.jpeg'

const Menu = () => {
    return (
        <Container className='mt-5'>
            <h2 className='text-center mb-5 fs-2'>POPULAR MENU</h2>
            <Row xs={1} sm={2} md={4} lg={4}>
                <Col className='mb-3'>
                    <Card>
                        <Card.Img className='menu-img' variant="top" src={img1} />
                        <Card.Body>
                            
                            <Card.Text className='text-danger'>
                             1.33$-1.39$
                            </Card.Text>
                            <Card.Title>Pasta</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mb-3'>
                    <Card>
                        <Card.Img className='menu-img' variant="top" src={img2} />
                        <Card.Body>
                            
                            <Card.Text className='text-danger'>
                            23$
                            </Card.Text>
                            <Card.Title>Arancini</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mb-3'>
                    <Card>
                        <Card.Img className='menu-img' variant="top" src={img3} />
                        <Card.Body>
                            
                            <Card.Text className='text-danger'>
                            14.48$
                            </Card.Text>
                            <Card.Title>Lasagne</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mb-3'>
                    <Card>
                        <Card.Img className='menu-img' variant="top" src={img4} />
                        <Card.Body>
                            <Card.Text className='text-danger'>
                             10.99$
                            </Card.Text>
                            <Card.Title>Torrone</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Menu;