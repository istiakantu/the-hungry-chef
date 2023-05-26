import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    return (
        <Col className='mb-3'>
            <Card className="mb-4">
                <LazyLoad >
                    <Card.Img className='card-img p-1' variant="top" src={chef.chefPicture} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title className='text-center'>{chef.chefName}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between'>
                        <p>Experience: {chef.experience}</p>
                        <p>Number of Recipes: {chef.numberOfRecipes}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            {chef.likes} <FaRegThumbsUp className='mb-1'></FaRegThumbsUp>
                        </div>
                        <Link to={`${chef.id}`}><Button className='' variant="danger">View Recipes</Button></Link>
                    </div>
                </Card.Footer>

            </Card>
        </Col>
    );
};

export default Chef;