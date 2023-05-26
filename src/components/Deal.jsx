import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../assets/deal/866649.jpg'
import img2 from '../assets/deal/Stuffed_Deviled_Eggs_with_Parsley_and_Mayonnaise_Peri_Peri_Bhujia_-5_400.jpg'

const Deal = () => {
    return (
        <section className='mt-5 m-5'>
            <h2 className='text-center mb-5 fs-2'>HOT DEALS</h2>
            <Row>
                <Col md={6} className='mb-3'>
                    <Card className="bg-dark text-white">
                        <Card.Img className='deal-img' src={img1} alt="Card image 1" />
                        <Card.ImgOverlay className='mt-5 ms-3'>
                                <Card.Title className='fs-2'> DELICIOUS PIZZA </Card.Title>
                                <Card.Text className='fs-3'>
                                    <i>BYE ONE GET ONE FREE</i>
                                </Card.Text>
                                <Button variant="danger">Shop Now</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="bg-dark text-white">
                        <Card.Img className='deal-img' src={img2} alt="Card image 2" />
                        <Card.ImgOverlay className='mt-5 ms-3'>
                                <Card.Title className='fs-2'> DELICIOUS DEVILED EGGS</Card.Title>
                                <Card.Text className='fs-3'>
                                    <i>Delivery to your place</i>
                                </Card.Text>
                                <Button variant="danger">Shop Now</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default Deal;