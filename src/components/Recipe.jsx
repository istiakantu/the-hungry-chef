import React, { useState } from 'react';
import { Card, Col,  } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const [addFev, setAddFev] = useState(false);
      

    const { recipeName, ingredients, cookingMethod, rating } = recipe;

    const handleClick = () => {
        toast('Added to favorite')
        setAddFev(true);
    };
    return (
        <Col md={4} className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title className='text-center fs-1'>{recipeName}</Card.Title>
                    <h2 className='fs-2 mt-3'>Ingredients</h2>
                    <Card.Text>
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                        <li>{ingredients[3]}</li>
                        <li>{ingredients[4]}</li>
                    </Card.Text>
                    <h2 className='text-center'>cooking Method</h2>
                    <Card.Text>{cookingMethod}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                            <span className='ms-2 fs-4'> {rating}</span>
                        </div>
                        <Button onClick={()=>handleClick()} disabled={addFev} className='btn-light mx-3 px-3'> 
                    {addFev? <FaHeart></FaHeart>:<FaRegHeart></FaRegHeart>}  
                        <ToastContainer></ToastContainer>
                        </Button>
                        
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Recipe;